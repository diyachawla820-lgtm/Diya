import { useVideoLoader } from '@/hooks/useVideoLoader'
import { getAssetPath } from '@/utils/assets'

export default function VideoBackground() {
  const { videoRef, isLoaded } = useVideoLoader(getAssetPath('/video/hero-bg.mp4'))

  return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
      {/* Poster / fallback */}
      <img
        src={getAssetPath('/video/hero-poster.jpg')}
        alt=""
        className={`absolute w-full min-h-full object-cover object-center transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ objectFit: 'fill', width: '100%' }}
      />

      {/* Video */}
      <video
        ref={videoRef}
        muted
        autoPlay
        loop
        playsInline
        className={`absolute w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/50" />
    </div>
  )
}
