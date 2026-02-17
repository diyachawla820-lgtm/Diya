import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.nav-logo',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 1, ease: 'power3.out' }
      )
      gsap.fromTo('.nav-item',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 1.2, ease: 'power3.out' }
      )
    }, headerRef)
    return () => ctx.revert()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/90 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
      style={{ zIndex: 110 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            setMobileOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="nav-logo font-display text-xl md:text-2xl font-semibold text-cream tracking-tight hover:text-gold transition-colors"
        >
          Diya Chawla
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="nav-item font-sans text-sm text-cream/70 uppercase tracking-widest hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="nav-item hidden md:inline-flex px-5 py-2 border border-gold/40 text-gold text-sm font-medium rounded-full hover:bg-gold hover:text-charcoal transition-all"
        >
          Get in Touch
        </a>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-charcoal/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: -1 }}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="font-sans text-lg text-cream/80 uppercase tracking-widest hover:text-gold transition-colors"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="mt-4 px-8 py-3 border border-gold/40 text-gold text-sm font-medium rounded-full hover:bg-gold hover:text-charcoal transition-all"
        >
          Get in Touch
        </a>
      </div>
    </header>
  )
}
