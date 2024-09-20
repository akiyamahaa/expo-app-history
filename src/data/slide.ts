import { images } from '@/constants'

export interface ISlideData {
  id: number
  title: string
  descrition: string
  imageSource: number
}

export const slideData: ISlideData[] = [
  {
    id: 1,
    title: 'Triều đình',
    descrition:
      'lorem ipsum dolor sit elandor nakroth slimz  nakroth slimz nakroth slimz nakroth slimz nakroth slimz nakroth slimz nakroth slimz nakroth slimz nakroth slimz',
    imageSource: images.slide1,
  },
  {
    id: 2,
    title: 'Triều đình',
    descrition:
      'lorem ipsum dolor sit elandor  nakroth slimz nakroth slimz nakroth slimz nakroth slimz nakroth slimz nakroth slimz nakroth slimz nakroth slimz nakroth slimz',
    imageSource: images.slide2,
  },
  {
    id: 3,
    title: 'Triều đình',
    descrition: 'lorem ipsum dolor sit elandor nakroth slimz nakroth slimz nakroth slimz',
    imageSource: images.slide1,
  },
  {
    id: 4,
    title: 'Triều đình',
    descrition: 'lorem ipsum dolor sit elandor nakroth slimz nakroth slimz nakroth slimz',
    imageSource: images.slide1,
  },
  {
    id: 5,
    title: 'Triều đình',
    descrition: 'lorem ipsum dolor sit elandor nakroth slimz nakroth slimz nakroth slimz',
    imageSource: images.slide1,
  },
  {
    id: 6,
    title: 'Triều đình',
    descrition: 'lorem ipsum dolor sit elandor nakroth slimz nakroth slimz nakroth slimz',
    imageSource: images.slide1,
  },
]
