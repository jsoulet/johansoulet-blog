import { FluidObject } from 'gatsby-image'
export interface ICaseStudyCard {
  id: string
  title: string
  category: string
  image: FluidObject
  slug: string
}

export interface ICaseStudySource {
  id: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    category: string
    date: string
    featuredImage: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}
