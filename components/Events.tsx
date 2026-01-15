'use client'

const events = [
  {
    title: 'Monthly Virtual Gathering',
    date: 'First Saturday of each month',
    time: '10:00 AM PT',
    location: 'Zoom',
    description: 'Meet fellow members, share updates, and discuss topics relevant to Catholic rural life.',
  },
  {
    title: 'Fresno Regional Meetup',
    date: 'Coming Soon',
    time: 'TBD',
    location: 'Fresno Area',
    description: 'In-person gathering for Central Valley members. Connect with your neighbors.',
  },
  {
    title: 'Spring Workshop',
    date: 'Spring 2025',
    time: 'TBD',
    location: 'Northern California',
    description: 'Hands-on practical skills workshop. Topics and location to be announced.',
  },
]

export default function Events() {
  return (
    <section id="events" className="py-20 bg-parchment">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-earth mb-4">
            Upcoming Events
          </h2>
          <p className="font-body text-lg text-earth/70 max-w-xl mx-auto">
            Join us for gatherings, workshops, and fellowship. In-person and virtual opportunities to connect.
          </p>
        </div>

        {/* Events list */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="bg-cream border border-earth/10 rounded-sm p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Date badge */}
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center px-4 py-2 bg-forest/10 rounded-sm">
                    <svg className="w-4 h-4 text-forest mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-body text-sm font-medium text-forest">
                      {event.date}
                    </span>
                  </div>
                </div>

                {/* Event details */}
                <div className="flex-grow">
                  <h3 className="font-display text-xl md:text-2xl text-earth mb-2">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-earth/60 font-body mb-3">
                    {event.time !== 'TBD' && (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </span>
                    )}
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </span>
                  </div>
                  <p className="font-body text-earth/70">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More events note */}
        <p className="text-center mt-8 font-body text-earth/60">
          Sign up below to receive event announcements directly.
        </p>
      </div>
    </section>
  )
}
