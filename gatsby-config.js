/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Hämeenlinnan historia",
    author: "Perri Laakso",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        }
      }
    },
/*     {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "${__dirname}/src/images/",
      },
    }, */
  ],
};
