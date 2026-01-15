'use client'

export default function Footer() {
  return (
    <footer className="bg-earth text-cream/80 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Title */}
          <div className="text-center md:text-left">
            <div className="font-display text-2xl text-cream mb-1">
              California CLM
            </div>
            <p className="font-body text-sm text-cream/60">
              A chapter of the Catholic Land Movement
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 font-body text-sm">
            <a
              href="https://catholiclandmovement.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              National CLM
            </a>
            <a
              href="mailto:cacatholiclandmovement@gmail.com"
              className="hover:text-cream transition-colors"
            >
              Contact
            </a>
            <a
              href="#signup"
              className="hover:text-cream transition-colors"
            >
              Join
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
          <p className="font-body">
            &copy; {new Date().getFullYear()} California Catholic Land Movement
          </p>
          <p className="font-body text-center">
            <span className="text-cream/40">&#10013;</span>{' '}
            <em>&ldquo;Instaurare omnia in Christo&rdquo;</em>
          </p>
        </div>
      </div>
    </footer>
  )
}
