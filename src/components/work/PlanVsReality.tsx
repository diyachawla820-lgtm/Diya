import PlaceholderImage from '@/components/shared/PlaceholderImage'
import FadeInOnScroll from '@/components/shared/FadeInOnScroll'
import { useLightbox } from '@/components/shared/LightboxContext'
import type { PlanVsRealityItem } from '@/data/projects'

export default function PlanVsReality({ items }: { items: PlanVsRealityItem[] }) {
  const { open } = useLightbox()

  return (
    <div className="space-y-16">
      {items.map((item, i) => (
        <FadeInOnScroll key={item.label} delay={i * 0.1}>
          <div>
            <h4 className="font-serif text-xl font-bold text-charcoal mb-4">{item.label}</h4>
            <div className="grid grid-cols-2 gap-3 md:gap-6 items-stretch">
              <div className="flex flex-col">
                <div className="relative flex-1 overflow-hidden rounded-lg bg-charcoal/5">
                  <span className="absolute top-3 left-3 z-10 bg-charcoal/80 text-cream text-xs font-semibold px-3 py-1 rounded-full">
                    Plan
                  </span>
                  {item.planImage ? (
                    <img
                      src={item.planImage}
                      alt={item.planCaption}
                      className="w-full h-96 sm:h-[28rem] md:h-[36rem] object-cover rounded-lg"
                      style={{ objectPosition: item.planPosition ?? '50% 0%' }}
                      loading="lazy"
                    />
                  ) : (
                    <PlaceholderImage
                      label={item.planCaption}
                      icon="📐"
                      className="w-full h-80 md:h-96"
                    />
                  )}
                </div>
                <p className="text-sm text-muted mt-2">{item.planCaption}</p>
              </div>
              <div className="flex flex-col">
                <div className="relative flex-1 overflow-hidden rounded-lg">
                  <span className="absolute top-3 left-3 z-10 bg-gold text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                    Reality
                  </span>
                  {item.realityImage ? (
                    <img
                      src={item.realityImage}
                      alt={item.realityCaption}
                      className="w-full h-96 sm:h-[28rem] md:h-[36rem] object-cover rounded-lg"
                      style={{ objectPosition: item.realityPosition ?? '50% 50%' }}
                      loading="lazy"
                    />
                  ) : (
                    <PlaceholderImage
                      label={item.realityCaption}
                      icon="✨"
                      className="w-full h-80 md:h-96"
                    />
                  )}
                </div>
                <p className="text-sm text-muted mt-2">{item.realityCaption}</p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      ))}
    </div>
  )
}
