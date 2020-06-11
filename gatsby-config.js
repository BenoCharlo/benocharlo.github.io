module.exports = {
  siteMetadata: {
    title: `BenoBlog`,
    description: `A personal blog for hosting content about data science`,
    author: `🔅BenoCharlo`,
    url: `https://www.benocharlo.com`,
    image: `src/static/favicon-32x32.png`,
    authorLinkedIn: `https://www.linkedin.com/in/beno-charles-dokodjo-26234210b/`,
    authorGithub: `https://github.com/BenoCharlo`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
