import { images } from '@/constants'

export interface ISampleData {
  id: number
  image: any
  description: string
  title: string
}

export const sampleData: ISampleData[] = [
  {
    id: 1,
    image: images.slide1,
    title: 'Triều Đình',
    description: 'Lorem ipsum',
  },
  {
    id: 2,
    image: images.slide2,
    title: 'Triều Đình 2',
    description: 'Lorem ipsu 2m',
  },
]
