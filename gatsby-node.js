const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: { allStrapiPost },
  } = await graphql(`
    query getPosts {
      allStrapiPost {
        edges {
          node {
            id
            slug
            content
            forms {
              id
            }
          }
        }
      }
    }
  `)

  console.log(allStrapiPost.edges)

  if (allStrapiPost && allStrapiPost.edges.length) {
    allStrapiPost.edges.forEach(({ node: { id, slug } }) => {
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id,
          slug,
        },
      })
    })
  }
}
