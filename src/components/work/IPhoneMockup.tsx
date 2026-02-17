import { getAssetPath } from '@/utils/assets'

export default function IPhoneMockup() {
  return (
    <div className="relative mx-auto w-[220px] sm:w-[260px] md:w-[280px]">
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-4 border-charcoal/80 bg-charcoal overflow-hidden shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-charcoal rounded-b-2xl z-10" />

        {/* Screen content */}
        <div className="h-[400px] sm:h-[470px] md:h-[520px] overflow-hidden bg-charcoal">
          <video
            src={getAssetPath('/video/Reel.mp4')}
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-cream/30 rounded-full" />
      </div>
    </div>
  )
}
