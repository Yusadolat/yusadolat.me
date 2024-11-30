module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: "Yusuf Adeyemo",
    author: "Yusuf Adeyemo",
    description: "Yusuf Adeyemo - Senior Devops Engineer / Site Reliability Engineer",
    siteUrl: "https://yusadolat.me"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              sizeByPixelDensity: true
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `75`
            }
          },
          {
            resolve: "gatsby-remark-emojis",
            options: {
              active: true,
              class: "emoji-icon",
              size: 64,
              styles: {
                display: "inline",
                margin: "0",
                position: "relative"
              }
            }
          },
          "gatsby-remark-external-links",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-catch-links`,
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-129353757-1",
        head: false
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        generateMatchPathRewrites: true
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: "#1976d2",
        showSpinner: false
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Yusuf Adeyemo",
        short_name: "Yusadolat",
        start_url: "/",
        background_color: "#1976d2",
        theme_color: "#1976d2",
        display: "minimal-ui",
        icon: `src/assets/images/logo.jpg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "yusadolat.me"
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
