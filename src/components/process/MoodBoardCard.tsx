import PlaceholderImage from '@/components/shared/PlaceholderImage'
import { useLightbox } from '@/components/shared/LightboxContext'

interface MoodBoardCardProps {
  title: string
  image: string | null
}

export default function MoodBoardCard({ title, image }: MoodBoardCardProps) {
  const { open } = useLightbox()

  return (
    <div className="group shrink-0 w-64 sm:w-80 md:w-96">
      <div className="overflow-hidden rounded-xl">
        <div className="transition-transform duration-500 group-hover:scale-105">
          <PlaceholderImage
            label={`Mood Board,${title}`}
            src={image}
            icon="🎨"
            className="w-full aspect-[3/4]"
          />
        </div>
      </div>
      <h4 className="font-serif text-lg font-bold text-charcoal mt-3">{title}</h4>
    </div>
  )
}
