'use client'

const pillars = [
  {
    title: 'Rural Resettlement',
    description: 'Helping families transition from urban to rural life, finding land and building sustainable homesteads.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Practical Education',
    description: 'Workshops and mentorship in traditional skills: animal husbandry, gardening, food preservation, and land stewardship.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Fellowship',
    description: 'Building authentic community through gatherings, mutual aid, and lasting friendships rooted in shared values.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Faith & Land',
    description: 'Grounding our work in Catholic social teaching, the encyclicals, and the Church\'s vision for human flourishing.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export default function Pillars() {
  return (
    <section id="pillars" className="py-20 texture-overlay">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-earth mb-4">
            Four Pillars
          </h2>
          <p className="font-body text-lg text-earth/70 max-w-xl mx-auto">
            The Catholic Land Movement is built on four foundational principles, rooted in the Church&apos;s social teaching.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group bg-cream border border-earth/10 rounded-sm p-8 hover:shadow-lg hover:border-forest/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-forest/10 rounded-full flex items-center justify-center mb-6 text-forest group-hover:bg-forest group-hover:text-cream transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-display text-2xl text-earth mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-earth/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mt-16 text-center max-w-3xl mx-auto">
          <p className="font-display text-2xl md:text-3xl text-earth/80 italic leading-relaxed">
            &ldquo;The law should favor ownership, and its policy should be to induce as many as possible of the people to become owners.&rdquo;
          </p>
          <footer className="mt-4 font-body text-earth/60">
            &mdash; Pope Leo XIII, <cite>Rerum Novarum</cite> (1891)
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
