import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Image from '../components/Image'
import Breadcrumb from '../components/Breadcrumb'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

const shortcodes = { Image }

const BlogPost = ({ data, children, pageContext, ...props }) => {
  const { frontmatter } = data.mdx
  return (
    <Layout fullMenu>
      <article id="main">
        <Header
          title={frontmatter.title}
          subtitle={`${frontmatter.date} - ${data.mdx.timeToRead}mn to read`}
          banner={frontmatter.featuredImage}
        />
        <section className="wrapper style5">
          <div className="inner">
            <Breadcrumb
              links={[
                { label: 'Home', to: '/' },
                { label: 'Blog', to: '/blog' },
                { label: frontmatter.title },
              ]}
            />
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
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
        date(formatString: "D MMMM YYYY")
        featuredImage
      }
    }
  }
`
