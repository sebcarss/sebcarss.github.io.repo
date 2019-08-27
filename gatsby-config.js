module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // See options for more detais https://www.gatsbyjs.org/packages/gatsby-remark-images/
                            maxWidth: 650,
                            linkImagesToOriginal: true,
                            showCaptions: false,
                        }
                    }
                ]
            }
        }
    ],
};