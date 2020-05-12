import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FluidObject } from 'gatsby-image'
import Layout from 'components/Layout'
import PageHero from 'components/PageHero'
import Article from 'components/Article'
import Button from 'components/Button'
import Seo from 'components/Seo'

import Image from './Image'

const shortcodes = { Image, Button }

export const pageQuery = graphql`
  query PageQuery($id: String, $locale: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      fileAbsolutePath
      fields {
        slug
      }
      frontmatter {
        title
        lang
        chapo
        date(formatString: "DD MMMM YYYY", locale: $locale)
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i18n {
          locale
          slug
        }
        noIndex
        metaimage: featuredImage {
          childImageSharp {
            fixed(width: 1200, height: 630) {
              src
            }
          }
        }
      }
    }
  }
`

interface IPage {
  mdx: {
    id: string
    body: string
    excerpt: string
    fileAbsolutePath: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      lang: string
      chapo: string
      date: string
      featuredImage: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
      i18n: {
        locale: string
        slug: string
      }[]
      noIndex?: boolean
      metaimage?: {
        childImageSharp: {
          fixed: {
            src: string
          }
        }
      }
    }
  }
}

const MdxLayout: FC<{ data: IPage }> = ({ data }) => {
  const { formatMessage } = useIntl()
  const filePath = data.mdx.fileAbsolutePath
  const breadcrumbCategoryLink: Array<{
    label: string
    link?: string
  }> = []
  if (filePath.includes('/content/posts/')) {
    breadcrumbCategoryLink.push({ label: formatMessage({ id: 'breadcrumb.blog' }), link: '/blog' })
  } else if (filePath.includes('/content/studies')) {
    breadcrumbCategoryLink.push({
      label: formatMessage({ id: 'breadcrumb.caseStudies' }),
      link: '/case-studies',
    })
  }
  return (
    <Layout i18nLinks={data.mdx.frontmatter.i18n} hideToogleLocale={!data.mdx.frontmatter.i18n}>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.chapo || data.mdx.excerpt}
        image={data.mdx.frontmatter.metaimage?.childImageSharp.fixed.src}
        slug={data.mdx.fields.slug}
        noIndex={data.mdx.frontmatter?.noIndex}
      />
      <PageHero
        title={data.mdx.frontmatter.title}
        breadcrumb={[
          { label: formatMessage({ id: 'breadcrumb.home' }), link: '/' },
          ...breadcrumbCategoryLink,
          { label: data.mdx.frontmatter.title },
        ]}
      />
      <Article>
        <section>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </section>
      </Article>
    </Layout>
  )
}

export default MdxLayout
