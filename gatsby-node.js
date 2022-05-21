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
  let mixinLinks = {};
  let variablesLinks = {};
  let documentationLinks = {};

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

    switch (category) {
      case 'mixins':
        mixinLinks[title] = {
          "linkText": title,
          "linkRoute": `/${category}/${slug}`,
        };
        break;

      case 'variables':
        variablesLinks[title] = {
          "linkText": title,
          "linkRoute": `/${category}/${slug}`,
        };
        break;

      default:
        documentationLinks[title] = {
          "linkText": title,
          "linkRoute": `/${category}/${slug}`,
        }
    };

    createPage({
      path: `/${category}/${slug}`,
      component: require.resolve(`./src/templates/category.js`),
      context: { node, documentationLinks, mixinLinks, variablesLinks, category },
    })
  });
}