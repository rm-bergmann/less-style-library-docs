module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "less-style-library-docs",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-V9LBM64Y14",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
