const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
   const { createNodeField } = actions

   if (node.internal.type === `MarkdownRemark`) {
      // Create slug field
      createNodeField({
         name: `slug`,
         node,
         value: node.frontmatter.path,
      })
   }
}

exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions
   const blogPost = path.resolve('./src/templates/blogTemplate.js')

   const result = await graphql(`
      {
         allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
         ) {
            edges {
               node {
                  fields {
                     slug
                  }
                  frontmatter {
                     model
                     title
                     description
                     path
                     date(formatString: "MMMM DD, YYYY")
                     tags
                  }
               }
            }
         }
      }
   `)

   if (result.errors) {
      console.log(result.errors)
      throw result.errors
   }

   const posts = result.data.allMarkdownRemark.edges

   // Create blog posts pages
   posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
         path: post.node.fields.slug,
         component: blogPost,
         context: {
            slug: post.node.fields.slug,
            previous,
            next,
         },
      })
   })
}

// Add custom webpack config to handle image imports
exports.onCreateWebpackConfig = ({ actions }) => {
   actions.setWebpackConfig({
      resolve: {
         modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      },
   })
}
