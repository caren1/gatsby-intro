// gatsby node config file that allows to use node apis that gatsby exposes
// we'll use it to create slug and in order to dynamically render blog posts pages

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node#onCreateNode

// function will run when new node will be created
// we will be creating pages only for nodes of type markdownremark
// slug will be taken from filename, that is why we'll use a special
// in-built npm package that allows for such functionality - PATH (node.js)

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
