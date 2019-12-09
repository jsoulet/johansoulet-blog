import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout fullMenu>
      <article id="main">
        <Header title={frontmatter.title} subtitle={frontmatter.date} />
        <section className="wrapper style5">
          <div className="inner" dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </article>
    </Layout>
  )
}

export default BlogPost

// export default function Template({
//   data, // this prop will be injected by the GraphQL query below.
// }) {
//   const { markdownRemark } = data // data.markdownRemark holds your post data
//   const { frontmatter, html } = markdownRemark
//   return (
//     <div className="blog-post-container">
//       <div className="blog-post">
//         <h1>{frontmatter.title}</h1>
//         <h2>{frontmatter.date}</h2>
//         <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
//       </div>
//     </div>
//   )
// }