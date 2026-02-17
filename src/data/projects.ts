export interface PlanVsRealityItem {
  label: string
  planImage: string | null
  realityImage: string | null
  planCaption: string
  realityCaption: string
  planPosition?: string
  realityPosition?: string
}

export interface StatItem {
  value: number
  suffix: string
  label: string
}

export const weddingStats: StatItem[] = [
  { value: 500, suffix: '+', label: 'Guests Hosted' },
  { value: 23, suffix: '', label: 'Vendor Teams Coordinated' },
  { value: 3, suffix: '', label: 'Day Multi-Event Production' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

export const planVsReality: PlanVsRealityItem[] = [
  {
    label: 'Ceremony Setup',
    planImage: '/images/EventLayout.png',
    realityImage: '/images/EventLayoutReal.jpg',
    planCaption: 'AutoCAD floor plan with precise seating grid',
    realityCaption: 'Seating arranged for 500 under open-air mandap',
    realityPosition: '50% 88%',
  },
  {
    label: 'Reception Layout',
    planImage: '/images/3DSketchup.png',
    realityImage: '/images/ReceptionImage.jpg',
    planCaption: 'SketchUp 3D render of table arrangements',
    realityCaption: 'Actual setup of table arrangements',
    planPosition: '0% 50%',
    realityPosition: '25% 50%',
  },
  {
    label: 'Décor Installation',
    planImage: '/images/DecorInstallationMoodBoard.png',
    realityImage: '/images/DecorInstallation.jpg',
    planCaption: 'Mood board with floral palette and textures',
    realityCaption: 'Floral canopy spanning 40-foot ceiling',
    realityPosition: '50% 30%',
  },
]

export const moodBoards = [
  { id: 1, title: 'Ethereal Garden', image: '/images/moodboard-1.png' },
  { id: 2, title: 'Urban Luxe', image: '/images/moodboard-2.png' },
  { id: 3, title: 'Coastal Minimal', image: '/images/moodboard-3.png' },
  { id: 4, title: 'Heritage Opulence', image: '/images/moodboard-4.png' },
  { id: 5, title: 'Modern Romantic', image: '/images/moodboard-5.png' },
]
