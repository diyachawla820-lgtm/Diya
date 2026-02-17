import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

interface FadeInOnScrollProps {
  children: ReactNode
  className?: string
  y?: number
  delay?: number
  duration?: number
}

export default function FadeInOnScroll({ children, className = '', y = 40, delay = 0, duration = 0.8 }: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, { scope: ref })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
