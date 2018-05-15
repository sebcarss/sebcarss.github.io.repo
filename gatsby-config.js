module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-plugin-sharp`,
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