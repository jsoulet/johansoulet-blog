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
          date(formatString: "D MMMM YYYY")
          title
          path
          featuredImage
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
