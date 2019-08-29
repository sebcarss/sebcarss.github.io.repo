const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `posts` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
};

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
    console.log(`\n`)
  })
};

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions
//     return new Promise((resolve, reject) => {
//         graphql(`
//         {
//           allMarkdownRemark(filter: {frontmatter: {published: {eq: "true"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
//             edges {
//               node {
//                 fields {
//                   slug
//                 }
//               }
//             }
//           }
//         }
//       `).then(result => {
//             console.log(`\n`)
//             console.log(`######################`)
//             console.log(`### CREATING PAGES ###`)
//             console.log(`######################`)
//             result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//                 console.log(`  >`, node.fields.slug)
//                 createPage({
//                     path: node.fields.slug,
//                     component: path.resolve(`./src/components/blog-post.js`),
//                     context: {
//                         // Data passed to context is available in page queries as GraphQL variables.
//                         slug: node.fields.slug,
//                     },
//                 })
//             })
//             console.log(`\n`)
//             resolve()
//         })
//     })
// };