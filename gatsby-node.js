const path = require('path');

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(less)$/,
          use: [
            {
              loader: 'less-loader'
            },
            {
              loader: path.resolve(__dirname, 'loaders', 'lessImport.js'),
              options: {
                files: ['imports', 'variables'],
                alias: '~less',
              },
            },
          ],
        },
      ],
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  let subMenuLinks = {}

  const { data } = await graphql(`
    query getMixins {
      allMdx {
        nodes {
          frontmatter {
            category
            description
            slug
            title
          }
          body
        }
      }
    }
  `);

  data.allMdx.nodes.forEach(node => {
    const { frontmatter } = node;
    const { category, slug, title } = frontmatter;

    subMenuLinks[title] = {
      "linkText": title,
      "linkRoute": `/${category}/${slug}`,
    }

    createPage({
      path: `/${category}/${slug}`,
      component: require.resolve(`./src/templates/category.js`),
      context: { node, subMenuLinks, category },
    })
  });

  /*
  variables.forEach(variable => {
    createPage({
      path: `/variables/${variable.name}`,
      component: require.resolve(`./src/templates/variable.js`),
      menuItem: variable.name,
      context: { variable },
    })
  });
  */
}