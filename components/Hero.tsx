'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center texture-overlay overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-wheat/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-forest/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* California CLM Logo */}
        <div className="animate-fade-in mb-8">
          <Image
            src="/clm-logo.png"
            alt="California Catholic Land Movement"
            width={120}
            height={160}
            className="mx-auto"
            priority
          />
        </div>

        {/* Main headline */}
        <h1 className="font-display text-5xl md:text-7xl font-medium text-earth mb-6 animate-fade-in-delay-1 leading-tight">
          California Catholics<br />
          <span className="text-forest">Returning to the Land</span>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-xl md:text-2xl text-earth/70 mb-10 animate-fade-in-delay-2 max-w-2xl mx-auto leading-relaxed">
          A movement of families rediscovering rural life, rooted in the social teaching of the Church and the wisdom of <em>Rerum Novarum</em>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <a
            href="#map"
            className="btn-primary rounded-sm"
          >
            Find Your Neighbors
          </a>
          <a
            href="#signup"
            className="px-6 py-3 border-2 border-earth/30 text-earth font-body font-medium rounded-sm hover:border-forest hover:text-forest transition-colors"
          >
            Join the Movement
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex justify-center gap-12 animate-fade-in-delay-4">
          <div className="text-center">
            <div className="font-display text-4xl text-forest">90+</div>
            <div className="font-body text-sm text-earth/60 uppercase tracking-wide">Members</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl text-forest">50+</div>
            <div className="font-body text-sm text-earth/60 uppercase tracking-wide">Cities</div>
          </div>
        </div>

        {/* National CLM Link */}
        <div className="mt-10 animate-fade-in-delay-4">
          <a
            href="https://catholiclandmovement.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-earth/60 hover:text-forest font-body text-sm transition-colors"
          >
            <span>A chapter of the</span>
            <span className="font-medium underline">Catholic Land Movement</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-earth/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
