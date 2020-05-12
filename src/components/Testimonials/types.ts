import { FixedObject } from 'gatsby-image'

export interface ITestimonial {
  content: string
  author: string
  rating: number
  avatar: FixedObject | null
}

export interface ITestimonialSource {
  name: string
  avatar: string
  value: number
  content: {
    [key: string]: string
  }
}

export interface ITestimonialAvatarsSource {
  childImageSharp: {
    fixed: FixedObject
  }
}
