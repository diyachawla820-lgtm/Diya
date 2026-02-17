import FadeInOnScroll from '@/components/shared/FadeInOnScroll'
import PlaceholderImage from '@/components/shared/PlaceholderImage'
import { useLightbox } from '@/components/shared/LightboxContext'
import { siteContent } from '@/data/siteContent'

export default function About() {
  const { about } = siteContent
  const { open } = useLightbox()

  return (
    <section className="py-24 md:py-32 bg-about">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInOnScroll>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-16 text-center leading-tight tracking-tight">
            {about.heading}
          </h2>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Headshot */}
          <FadeInOnScroll>
            <PlaceholderImage
              label="Professional Headshot"
              src="/images/Headshot.jpg"
              icon="👤"
              className="w-full max-w-lg mx-auto rounded-lg object-cover object-top h-[35rem] md:h-[36rem] lg:h-[40rem]"
            />
          </FadeInOnScroll>

          {/* Bio + Skills */}
          <div className="md:pt-8">
            {/* Large opening quote mark */}
            <FadeInOnScroll>
              <span className="font-display text-8xl text-gold/30 leading-none block -mb-10">&ldquo;</span>
              <p className="font-display text-lg md:text-2xl text-charcoal leading-relaxed italic">
                {about.bio[0]}
              </p>
            </FadeInOnScroll>

            {/* Elegant skill columns */}
            <FadeInOnScroll delay={0.2}>
              <div className="mt-16 grid grid-cols-3 gap-x-6 gap-y-10 md:gap-x-12 md:gap-y-0">
                {about.skills.map((skill) => (
                  <div key={skill.category} className="group">
                    {/* Category Header */}
                    <div className="mb-5">
                      <h3 className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.15em] mb-3 group-hover:tracking-[0.2em] transition-all duration-300">
                        {skill.category}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-[1px] bg-gold/50 group-hover:w-12 group-hover:bg-gold transition-all duration-300" />
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-gold/20 to-transparent" />
                      </div>
                    </div>

                    {/* Skills List */}
                    <ul className="space-y-3">
                      {skill.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs md:text-sm text-charcoal/60 font-sans leading-relaxed hover:text-charcoal/90 hover:translate-x-1 transition-all duration-200"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
