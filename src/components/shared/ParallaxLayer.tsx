import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

interface ParallaxLayerProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function ParallaxLayer({ children, speed = 0.5, className = '' }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current) return
    gsap.to(ref.current, {
      yPercent: speed * 30,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: ref })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
