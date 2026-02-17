import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import type { StatItem } from '@/data/projects'

export default function StatsCounter({ stats }: { stats: StatItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    const counters = containerRef.current.querySelectorAll('.stat-value')

    counters.forEach((el) => {
      const target = Number(el.getAttribute('data-target'))
      const obj = { val: 0 }

      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toString()
        },
      })
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-gold mb-2">
            <span className="stat-value" data-target={stat.value}>0</span>
            {stat.suffix}
          </div>
          <div className="text-xs sm:text-sm text-muted uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
