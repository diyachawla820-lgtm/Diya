import FadeInOnScroll from '@/components/shared/FadeInOnScroll'
import { siteContent } from '@/data/siteContent'

export default function Contact() {
  const { contact } = siteContent

  return (
    <section className="py-24 md:py-32 bg-contact text-cream">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeInOnScroll>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            {contact.heading}
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1}>
          <p className="text-cream/70 text-lg mb-12 max-w-lg mx-auto">
            {contact.subheading}
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold/90 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email Me
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-cream/30 text-cream font-semibold rounded-full hover:bg-cream/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
              LinkedIn
            </a>

            <a
              href={contact.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-8 py-3 border border-cream/30 text-cream font-semibold rounded-full hover:bg-cream/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
