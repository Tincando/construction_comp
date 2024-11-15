/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Basic Caulking`,
    siteUrl: `https://basic-caulking.ca/`,
    description: `Basic Caulkin, specializes in residential, commercial and industrial projects. We are dedicated to quality, details and lasting results.`,
    image: `src/images/icon.png`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://basic-caulking.ca/',
        sitemap: 'https://basic-caulking.ca/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
