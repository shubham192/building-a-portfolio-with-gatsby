module.exports = {
  siteMetadata: {
    title: `My Blog`,
    description: `This is my blog`,
    author: `@me`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`
      },
    },
  ],
}