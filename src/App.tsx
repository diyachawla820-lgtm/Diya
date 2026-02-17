import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LightboxProvider } from '@/components/shared/LightboxContext'
import Header from '@/components/shared/Header'
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import WorkShowcase from '@/components/work/WorkShowcase'
import ProcessSlider from '@/components/process/ProcessSlider'
import Contact from '@/components/contact/Contact'

export default function App() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!progressRef.current) return

    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    })

    // Mobile: simplify animations
    ScrollTrigger.matchMedia({
      '(max-width: 768px)': function () {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.vars.scrub && st.vars.pin) {
            st.kill()
          }
        })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <LightboxProvider>
      <Header />
      <div ref={progressRef} className="progress-bar" style={{ transform: 'scaleX(0)' }} />
      <Hero />
      <div id="about"><About /></div>
      <div id="process"><ProcessSlider /></div>
      <div id="work"><WorkShowcase /></div>
      <div id="contact"><Contact /></div>
    </LightboxProvider>
  )
}
