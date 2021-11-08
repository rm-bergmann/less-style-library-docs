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
  let mixinLinks = {}

  const { data } = await graphql(`
    query getMixins {
      allMdx {
        nodes {
          frontmatter {
            description
            slug
            title
          }
          body
        }
      }
    }
  `);

  data.allMdx.nodes.forEach(mixin => {
    const { frontmatter } = mixin;
    const { slug, title } = frontmatter;

    mixinLinks[title] = {
      "linkText": title,
      "linkRoute": `/mixins/${slug}`,
    }

    createPage({
      path: `/mixins/${slug}`,
      component: require.resolve(`./src/templates/mixin-template.js`),
      context: { mixin, mixinLinks },
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