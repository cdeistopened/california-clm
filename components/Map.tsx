'use client'

import { useState, useEffect } from 'react'

const MAP_PASSWORD = 'rerumnovarum' // Simple shared password

export default function Map() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  // Check localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('clm-map-access')
    if (stored === 'true') {
      setIsUnlocked(true)
    }
  }, [])

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.toLowerCase() === MAP_PASSWORD) {
      setIsUnlocked(true)
      localStorage.setItem('clm-map-access', 'true')
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <section id="map" className="py-20 bg-parchment">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-earth mb-4">
            Find Your Neighbors
          </h2>
          <p className="font-body text-lg text-earth/70 max-w-xl mx-auto">
            See where California CLM members are located. Connect with Catholics near you who share the vision of rural resettlement.
          </p>
        </div>

        {/* Map container */}
        <div className="relative bg-cream rounded-sm shadow-lg overflow-hidden">
          {!isUnlocked ? (
            /* Password gate */
            <div className="py-20 px-6 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>

                <h3 className="font-display text-2xl text-earth mb-3">
                  Member Access
                </h3>
                <p className="font-body text-earth/70 mb-6">
                  Enter the password shared in your welcome email to view the member map.
                </p>

                <form onSubmit={handleUnlock} className="space-y-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className={`w-full px-4 py-3 border-2 rounded-sm font-body bg-white transition-colors ${
                      error ? 'border-terracotta' : 'border-earth/20 focus:border-forest'
                    }`}
                  />
                  {error && (
                    <p className="text-terracotta text-sm font-body">
                      Incorrect password. Check your welcome email or contact Charlie.
                    </p>
                  )}
                  <button type="submit" className="w-full btn-primary rounded-sm">
                    View Map
                  </button>
                </form>

                <p className="mt-6 text-sm text-earth/50 font-body">
                  Not a member yet?{' '}
                  <a href="#signup" className="text-forest underline">
                    Join below
                  </a>
                </p>
              </div>
            </div>
          ) : (
            /* Embedded Google Map */
            <div className="relative" style={{ paddingBottom: '60%' }}>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1dT9WKN7bhlR1PNHs7sV8zlRyO1_Acek&ehbc=2E312F"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Help text */}
        {isUnlocked && (
          <p className="text-center mt-4 text-sm text-earth/50 font-body">
            Click a pin to see who&apos;s in your area. Want to add your location?{' '}
            <a href="#signup" className="text-forest underline">
              Sign up below
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
