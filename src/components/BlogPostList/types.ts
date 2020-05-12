import { FluidObject } from 'gatsby-image'
export interface IBlogPostItem {
  id: string
  title: string
  date: string
  excerpt: string
  image: FluidObject
  slug: string
}

export interface IBlogPostItemSource {
  id: string
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    chapo: string
    date: string
    featuredImage: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}
