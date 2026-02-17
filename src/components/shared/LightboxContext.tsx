import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import Lightbox from './Lightbox'

interface LightboxContextType {
  open: (src: string, alt?: string) => void
}

const LightboxContext = createContext<LightboxContextType>({ open: () => {} })

export function useLightbox() {
  return useContext(LightboxContext)
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<{ src: string; alt: string } | null>(null)

  const open = useCallback((src: string, alt = '') => {
    setImage({ src, alt })
  }, [])

  const close = useCallback(() => {
    setImage(null)
  }, [])

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {image && <Lightbox src={image.src} alt={image.alt} onClose={close} />}
    </LightboxContext.Provider>
  )
}
