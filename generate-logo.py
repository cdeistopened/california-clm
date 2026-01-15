#!/usr/bin/env python3
"""Generate CLM California logo using Gemini image generation."""

import os
import base64
from pathlib import Path
from google import genai
from google.genai import types

# API setup
API_KEY = os.getenv("GEMINI_API_KEY", "AIzaSyANCcVs9zxMmPxre4nsaWfIJdiqWasv_JY")
client = genai.Client(api_key=API_KEY)

# Image generation prompt - Eric Gill woodcut style, California theme
PROMPT = """Create a black and white woodcut-style illustration in the style of Eric Gill.

The image should feature:
- The silhouette of California state as the main shape
- Inside/overlaid with agrarian Catholic imagery: wheat sheaves, a simple plow, and a sheep
- A small Latin cross integrated into the design
- Bold, clean lines characteristic of linocut/woodblock printing
- High contrast black and white only, no gray tones
- Simple, iconic, suitable for use as a logo or emblem
- The overall feel should be traditional, rustic, and sacred

Style reference: Eric Gill's wood engravings - bold black shapes, white line details, medieval aesthetic."""

def generate_image():
    """Generate the logo image."""
    print(f"Using model: gemini-2.0-flash-exp")
    print(f"Prompt: {PROMPT[:100]}...")

    response = client.models.generate_content(
        model="gemini-2.0-flash-exp",
        contents=PROMPT,
        config=types.GenerateContentConfig(
            response_modalities=["image", "text"],
        )
    )

    # Extract image from response
    for part in response.candidates[0].content.parts:
        if hasattr(part, 'inline_data') and part.inline_data:
            image_data = part.inline_data.data
            mime_type = part.inline_data.mime_type

            # Determine file extension
            ext = "png" if "png" in mime_type else "jpg"
            output_path = Path(__file__).parent / "public" / f"clm-logo.{ext}"
            output_path.parent.mkdir(exist_ok=True)

            # Save the image
            with open(output_path, "wb") as f:
                f.write(image_data)

            print(f"Image saved to: {output_path}")
            return str(output_path)
        elif hasattr(part, 'text') and part.text:
            print(f"Text response: {part.text}")

    print("No image generated in response")
    return None

if __name__ == "__main__":
    result = generate_image()
    if result:
        print(f"\nSuccess! Logo saved to: {result}")
    else:
        print("\nFailed to generate image")
