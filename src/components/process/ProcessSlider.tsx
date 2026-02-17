import FadeInOnScroll from '@/components/shared/FadeInOnScroll'
import ScrollTrack from '@/components/shared/ScrollTrack'
import MoodBoardCard from './MoodBoardCard'
import { moodBoards } from '@/data/projects'

export default function ProcessSlider() {
  return (
    <section className="bg-process py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <FadeInOnScroll>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest mb-3 block">
            Process
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
            From Mood Board to Moment
          </h3>
          <p className="text-muted text-lg max-w-2xl">
            Every event begins with a feeling. These mood boards capture the initial
            vision before it becomes reality.
          </p>
        </FadeInOnScroll>
      </div>

      <FadeInOnScroll>
        <ScrollTrack>
          {moodBoards.map((board) => (
            <MoodBoardCard key={board.id} title={board.title} image={board.image} />
          ))}
        </ScrollTrack>
      </FadeInOnScroll>
    </section>
  )
}
