// gatsby node config file that allows to use node apis that gatsby exposes
// we'll use it to create slug and in order to dynamically render blog posts pages

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node#onCreateNode

// function will run when new node will be created
// we will be creating pages only for nodes of type markdownremark
// slug will be taken from filename, that is why we'll use a special
// in-built npm package that allows for such functionality - PATH (node.js)

// for single blog post we created a new directory 'templates' where we store a regular react component

// for our 3rd goal, so actually rendering the separate blog pages we'll need another api from inside gatsby-nodeconfig file -> createPages

const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // console.log(JSON.stringify(node, undefined, 4));
    // console.log(slag);
    // in this way we achieve goal1 to create a slug for each post
    createNodeField({ node, name: "slug", value: slug })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1 - get path to template - absolute path from harddrive
  const blogtemplate = path.resolve(`./src/templates/blog.js`)
  // 2 - get markdown data
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // 3 - create new pages
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogtemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
