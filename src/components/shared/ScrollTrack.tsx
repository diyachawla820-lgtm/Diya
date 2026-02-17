import { useRef, type ReactNode } from 'react'

interface ScrollTrackProps {
  children: ReactNode
  className?: string
  dark?: boolean
}

export default function ScrollTrack({ children, className = '', dark = false }: ScrollTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return
    const amount = window.innerWidth < 768 ? window.innerWidth * 0.4 : window.innerWidth * 0.6
    trackRef.current.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    })
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>

      {/* Left arrow */}
      <button
        onClick={() => scroll('left')}
        className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
          dark
            ? 'bg-cream/10 backdrop-blur-sm hover:bg-cream/20'
            : 'bg-charcoal/5 backdrop-blur-sm hover:bg-charcoal/10'
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={dark ? '#FAF9F6' : '#1A1A1A'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scroll('right')}
        className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
          dark
            ? 'bg-cream/10 backdrop-blur-sm hover:bg-cream/20'
            : 'bg-charcoal/5 backdrop-blur-sm hover:bg-charcoal/10'
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={dark ? '#FAF9F6' : '#1A1A1A'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Right fade hint */}
      <div className={`absolute right-0 top-0 bottom-4 w-24 pointer-events-none ${
        dark
          ? 'bg-gradient-to-l from-[#141414] to-transparent'
          : 'bg-gradient-to-l from-[#F2EDE7] to-transparent'
      }`} />
    </div>
  )
}
