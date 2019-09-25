const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {published: {eq: "true"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  console.log(`\n`)
  console.log(`######################`)
  console.log(`### CREATING PAGES ###`)
  console.log(`######################`)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(`  >`, node.frontmatter.path)
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/blogTemplate.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
      },
    })
  })
  console.log(`\n`)
};