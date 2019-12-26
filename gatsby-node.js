const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const path = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value: path,
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    // Create localized pages for all static views and blog post in their language
    // (ie: prevent for creating a /en/... route for a post in French)
    if (page.context.type !== 'blog' || page.context.locale === page.context.intl.language) {
      createPage({
        ...page,
        context: {
          ...page.context,
          locale: page.context.intl.language,
        },
      })
    }
    resolve()
  })
}

exports.createPages = async ({ graphql, actions, reporter, page }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              lang
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/BlogPost/index.js`),
      context: {
        id: node.id,
        locale: node.frontmatter.lang,
        type: 'blog',
      },
    })
  })
}
