interface PlaceholderImageProps {
  label: string
  src?: string | null
  alt?: string
  className?: string
  icon?: string
}

export default function PlaceholderImage({ label, src, alt, className = '', icon = '📷' }: PlaceholderImageProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label}
        className={`w-full ${className}`}
        loading="lazy"
      />
    )
  }

  return (
    <div className={`flex flex-col items-center justify-center bg-charcoal/5 border-2 border-dashed border-charcoal/20 rounded-lg min-h-48 ${className}`}>
      <span className="text-3xl mb-2">{icon}</span>
      <span className="text-sm text-muted text-center px-4">{label}</span>
    </div>
  )
}
