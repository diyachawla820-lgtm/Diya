import FadeInOnScroll from '@/components/shared/FadeInOnScroll'
import IPhoneMockup from './IPhoneMockup'

export default function BrandDigital() {
  return (
    <div className="py-24 md:py-32 bg-brand">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <FadeInOnScroll>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest mb-3 block">
                Digital Storytelling
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Brand & Digital
              </h3>
              <p className="text-muted text-lg mb-6">
                Events don't end when the lights go down. I extend the experience through
                social media content that captures the energy, emotion, and craft behind
                every production.
              </p>
              <ul className="space-y-3">
                {[
                  'Instagram Reels with 100K+ combined views',
                  'Brand identity systems for boutique events',
                  'Photography direction & post-production',
                  'Cross-platform content strategy',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted">
                    <span className="text-gold mt-0.5">&#10038;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInOnScroll>
          </div>

          <FadeInOnScroll delay={0.2}>
            <IPhoneMockup />
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  )
}
