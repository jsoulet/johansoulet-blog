import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../Layout'
import Header from '../Header'
import Image from '../Image'
import Breadcrumb from '../Breadcrumb'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

const shortcodes = { Image }

const BlogBreadCrumb = ({ title, ...props }) => {
  return (
    <Breadcrumb
      {...props}
      links={[
        { label: 'breadcrumb.home', to: '/' },
        { label: 'breadcrumb.blog', to: '/blog' },
        { label: title, isNotTranslated: true },
      ]}
    />
  )
}

const BlogPost = ({ data, children, pageContext, ...props }) => {
  const { frontmatter, excerpt, fields } = data.mdx
  const { locale } = useIntl()
  const metaTitle = frontmatter.title
  const metaDescription = frontmatter.chapo || excerpt
  const metaImage = `${data.site.siteMetadata.siteUrl}${frontmatter.metaimage.childImageSharp.fixed.src}`
  const canonicalUrl = `${data.site.siteMetadata.siteUrl}/${locale}${fields.slug}`

  return (
    <Layout fullMenu hideLocaleSwitcher>
      <article id="main">
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="image" content={metaImage} />
          <meta property="og:title" content={metaTitle}></meta>
          <meta property="og:description" content={metaDescription}></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta property="og:image" content={metaImage}></meta>
          <link rel="canonical" href={canonicalUrl}></link>
        </Helmet>
        <Header
          title={frontmatter.title}
          subtitle={frontmatter.date}
          banner={frontmatter.featuredImage}
        />
        <section className="wrapper style5">
          <div className="inner">
            <BlogBreadCrumb title={frontmatter.title} />
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
            <BlogBreadCrumb title={frontmatter.title} isBottom />
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostQuery($id: String, $locale: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
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
