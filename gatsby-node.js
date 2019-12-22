const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const locales = require('./config/i18n/locales')
const createLocalisedPath = require('./utils/createLocalisedPath')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const path = createFilePath({ node, getNode })
    const localizedSlug = createLocalisedPath(path, locales[node.frontmatter.lang])
    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: localizedSlug,
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).forEach(lang => {
      const localizedPath = createLocalisedPath(page.path, locales[lang])

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
        },
      })
    })

    resolve()
  })
}

exports.createPages = async ({ graphql, actions, reporter, page }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  // Create blog post pages from MDX
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
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/BlogPost/index.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        locale: node.frontmatter.lang,
      },
    })
  })
}
