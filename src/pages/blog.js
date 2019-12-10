import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import PostList from '../components/PostList'

export const pageQuery = graphql`
  {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(fromNow: true, locale: "FR")
          title
          path
          featuredImage {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 883, fit: COVER, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          chapo
        }
      }
    }
  }
`

const BlogPostList = ({ data }) => (
  <Layout fullMenu>
    <section className="wrapper style5">
      <div className="inner">
        <Breadcrumb links={[{ label: 'Accueil', to: '/' }, { label: 'Blog' }]} />
      </div>
      <PostList posts={data.allMdx.nodes}></PostList>
    </section>
  </Layout>
)

export default BlogPostList
