module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://mygatsbysitemain41901.gatsbyjs.io/`,
    title: "Bella Pham", 
    description: "Cybersecurity and Information Design",
    author: "Bella Pham"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Julius Sans One`,
          `Montserrat\:200,300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
}
