const path = require('path');
const lessPluginGlob = require('less-plugin-glob');

module.exports = {
  siteMetadata: {
    siteUrl: "https://less.rickbergmann.com",
    title: "less-style-library-docs",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-V9LBM64Y14",
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        loaderOptions: {
          sourceMap: true,
          // appendData: `@env: ${process.env.NODE_ENV};`,
        },
        lessOptions: {
          strictMath: true,
          plugins: [lessPluginGlob],
          paths: [
            path.resolve(__dirname, 'less'),
            path.resolve(__dirname, 'components'),
            path.resolve(__dirname, 'node_modules'),
          ]
          // plugins: [new CleanCSSPlugin({ advanced: true })],
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mixins",
        path: "./src/mixin-content",
      },
    },
  ],
};
