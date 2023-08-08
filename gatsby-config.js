const path = require('path');
const lessPluginGlob = require('less-plugin-glob');

module.exports = {
  siteMetadata: {
    siteUrl: "https://less.rickbergmann.com",
    title: "less-style-library-docs",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "289908734",
          "G-LHC5JGNJDW"
        ]
      },
      pluginConfig: {
        head: true,
      }
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
        name: "documentation",
        path: "./src/categories/about",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mixins",
        path: "./src/categories/mixins",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "variables",
        path: "./src/categories/variables",
      },
    },
    {
      resolve: `gatsby-plugin-minify`,
      options: {
        // removeStyleLinkTypeAttributes: false,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    }
  ],
};
