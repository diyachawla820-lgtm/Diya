import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import VideoBackground from './VideoBackground'
import ScrollArrow from './ScrollArrow'
import { siteContent } from '@/data/siteContent'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('.hero-name', { y: 60, opacity: 0, duration: 1, delay: 0.3 })
      .from('.hero-subtitle', { y: 40, opacity: 0, duration: 0.8 }, '-=0.4')
      .from('.hero-tagline', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
      .from('.hero-arrow', { opacity: 0, duration: 0.6 }, '-=0.2')
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground />
      <div className="relative z-10 text-center text-cream px-4">
        <h1 className="hero-name font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
          {siteContent.hero.name}
        </h1>
        <p className="hero-subtitle text-lg md:text-xl lg:text-2xl font-medium text-cream/90 mb-3 tracking-wide uppercase">
          {siteContent.hero.subtitle}
        </p>
        <p className="hero-tagline text-base md:text-lg text-cream/70 max-w-xl mx-auto italic">
          {siteContent.hero.tagline}
        </p>
      </div>
      <div className="hero-arrow">
        <ScrollArrow />
      </div>
    </section>
  )
}
