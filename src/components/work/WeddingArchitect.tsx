import FadeInOnScroll from '@/components/shared/FadeInOnScroll'
import StatsCounter from './StatsCounter'
import PlanVsReality from './PlanVsReality'
import { weddingStats, planVsReality } from '@/data/projects'

export default function WeddingArchitect() {
  return (
    <div className="py-24 md:py-32 bg-wedding">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInOnScroll>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest mb-3 block">
            Featured Project
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
            The Wedding Architect
          </h3>
          <p className="text-muted text-lg max-w-2xl mb-16">
            From AutoCAD floor plans to a three-day celebration for 500+ guests, every detail
            bridged the gap between blueprint precision and living, breathing spectacle.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <StatsCounter stats={weddingStats} />
        </FadeInOnScroll>

        <div className="mt-20">
          <FadeInOnScroll>
            <h4 className="font-serif text-2xl font-bold text-charcoal mb-8 text-center">
              Plan vs. Reality
            </h4>
          </FadeInOnScroll>
          <PlanVsReality items={planVsReality} />
        </div>
      </div>
    </div>
  )
}
