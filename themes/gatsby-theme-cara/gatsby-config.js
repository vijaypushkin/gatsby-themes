module.exports = ({ basePath = `/` }) => ({
  siteMetadata: {
    siteTitle: `Cara`,
    siteTitleAlt: `Cara - @vijaypushkin/gatsby-theme-cara`,
    siteHeadline: `Cara - Gatsby Theme from @vijaypushkin`,
    siteUrl: `https://vijaypushkin.me`,
    siteDescription: `I love creating web technologies to solve modern problems`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Vijay Pushkin`,
    basePath,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ],
})
