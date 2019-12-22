import React from 'react'
import Layout from '../Layout'
import Header from '../Header'
import Image from '../Image'
import Breadcrumb from '../Breadcrumb'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

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
  const { frontmatter } = data.mdx
  return (
    <Layout fullMenu locale={frontmatter.lang}>
      <article id="main">
        <Header
          title={frontmatter.title}
          subtitle={`${frontmatter.date} - ${data.mdx.timeToRead}mn to read`}
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
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        title
        lang
        date(formatString: "DD/MM/YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
