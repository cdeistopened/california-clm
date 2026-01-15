# California Catholic Land Movement Website

A simple landing page for the California chapter of the Catholic Land Movement.

## Features

- Hero section with mission statement
- Password-protected member map (Google My Maps embed)
- Four pillars of the movement
- Upcoming events
- Email signup form
- Responsive design with warm, earthy aesthetic

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Configuration

### Map Password
Edit `components/Map.tsx` line 5 to change the password:
```typescript
const MAP_PASSWORD = 'rerumnovarum'
```

### Formspree
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `components/Signup.tsx` with your form ID

### Events
Edit `components/Events.tsx` to update the events list.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to [vercel.com](https://vercel.com)
3. Deploy

### Manual
```bash
npm run build
npm run start
```

## Map Password

Current password: `rerumnovarum`

Share this with members in welcome emails. It's stored in localStorage so members only enter it once.
