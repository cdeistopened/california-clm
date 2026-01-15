'use client'

import { useState } from 'react'

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/mqeeabko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', city: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="signup" className="py-20 texture-overlay">
      <div className="max-w-2xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-earth mb-4">
            Join the Movement
          </h2>
          <p className="font-body text-lg text-earth/70">
            Interested in connecting with California Catholics pursuing rural life? Fill out the form below and Charlie will be in touch.
          </p>
        </div>

        {/* Form */}
        {status === 'success' ? (
          <div className="bg-forest/10 border border-forest/20 rounded-sm p-8 text-center">
            <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-earth mb-2">Thank you!</h3>
            <p className="font-body text-earth/70">
              Your message has been sent. Charlie will respond within a few days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-body text-sm font-medium text-earth mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-earth/20 rounded-sm font-body bg-white focus:border-forest focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-body text-sm font-medium text-earth mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-earth/20 rounded-sm font-body bg-white focus:border-forest focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block font-body text-sm font-medium text-earth mb-2">
                City / Region
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-earth/20 rounded-sm font-body bg-white focus:border-forest focus:outline-none transition-colors"
                placeholder="Where in California are you located?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-body text-sm font-medium text-earth mb-2">
                Tell us about yourself
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-earth/20 rounded-sm font-body bg-white focus:border-forest focus:outline-none transition-colors resize-none"
                placeholder="What draws you to the Catholic Land Movement? What skills or interests do you bring?"
              />
            </div>

            {status === 'error' && (
              <div className="bg-terracotta/10 border border-terracotta/20 rounded-sm p-4 text-center">
                <p className="font-body text-terracotta">
                  Something went wrong. Please try again or email directly at{' '}
                  <a href="mailto:cacatholiclandmovement@gmail.com" className="underline">
                    cacatholiclandmovement@gmail.com
                  </a>
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full btn-primary rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            <p className="text-center text-sm text-earth/50 font-body">
              Your information is never shared. Emails go directly to Charlie.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
