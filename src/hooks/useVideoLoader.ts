import { useState, useEffect, useRef } from 'react'

export function useVideoLoader(src: string, timeout = 8000) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasTimedOut, setHasTimedOut] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const timer = setTimeout(() => {
      if (!isLoaded) setHasTimedOut(true)
    }, timeout)

    const handleCanPlay = () => {
      clearTimeout(timer)
      setIsLoaded(true)
    }

    video.addEventListener('canplaythrough', handleCanPlay)
    video.src = src

    return () => {
      clearTimeout(timer)
      video.removeEventListener('canplaythrough', handleCanPlay)
    }
  }, [src, timeout, isLoaded])

  return { videoRef, isLoaded, hasTimedOut }
}
