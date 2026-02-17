import FadeInOnScroll from '@/components/shared/FadeInOnScroll'
import ScrollTrack from '@/components/shared/ScrollTrack'
import { getAssetPath } from '@/utils/assets'

const eventImages = [
  { src: getAssetPath('/images/Spatial1.png'), alt: 'Event Interior 1', className: 'object-top' },
  { src: getAssetPath('/images/EventSpatial2.png'), alt: 'Event Interior 2', className: '' },
  { src: getAssetPath('/images/EventSpatial3.png'), alt: 'Event Interior 3', className: '' },
]

const homeImages = [
  { src: getAssetPath('/images/Spatial2.jpg'), alt: 'Home Interior 1', className: '' },
  { src: getAssetPath('/images/Spatial3.jpg'), alt: 'Home Interior 2', className: '' },
  { src: getAssetPath('/images/Spatial4.jpg'), alt: 'Home Interior 3', className: '' },
  { src: getAssetPath('/images/Spatial5.jpg'), alt: 'Home Interior 4', className: '' },
]

export default function SpatialStorytelling() {
  return (
    <div className="bg-spatial text-cream py-20 md:py-28">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <FadeInOnScroll>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest mb-3 block">
            Spatial Design
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Designing Spaces That Feel Like Home
          </h3>
          <p className="text-cream/70 text-base md:text-lg max-w-2xl">
            From residential interiors to grand event venues, I design spaces people
            feel something in. Using AutoCAD and SketchUp, I map out every layout,
            sight line, and flow before a single piece of furniture is moved or a
            single flower is placed.
          </p>
        </FadeInOnScroll>
      </div>

      {/* Event Interiors */}
      <div className="mb-16">
        <FadeInOnScroll>
          <div className="max-w-6xl mx-auto px-6 mb-6 flex items-center gap-4">
            <h4 className="font-serif text-xl font-bold text-cream">Event Interiors</h4>
            <div className="flex-1 h-px bg-cream/10" />
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <ScrollTrack dark>
            {eventImages.map((img, i) => (
              <div key={`event-${i}`} className="shrink-0 h-[35vh] md:h-[45vh] w-[300px] md:w-[550px] rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className={`h-full w-full object-cover rounded-xl ${img.className}`} loading="lazy" />
              </div>
            ))}
          </ScrollTrack>
        </FadeInOnScroll>
      </div>

      {/* Home Interiors */}
      <div>
        <FadeInOnScroll>
          <div className="max-w-6xl mx-auto px-6 mb-6 flex items-center gap-4">
            <h4 className="font-serif text-xl font-bold text-cream">Home Interiors</h4>
            <div className="flex-1 h-px bg-cream/10" />
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <ScrollTrack dark>
            {homeImages.map((img, i) => (
              <div key={`home-${i}`} className="shrink-0 h-[35vh] md:h-[45vh] w-[300px] md:w-[550px] rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className={`h-full w-full object-cover rounded-xl ${img.className}`} loading="lazy" />
              </div>
            ))}
          </ScrollTrack>
        </FadeInOnScroll>
      </div>
    </div>
  )
}
