module.exports = {
    siteMetadata: {
        title: 'Gatsby PWA News',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Gatsby PWA News",
                short_name: "Gatsby PWA News",
                start_url: "/",
                background_color: "#f7f0eb",
                theme_color: "#a2466c",
                display: "minimal-ui",
                icon: "src/images/icon.png", // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`
    ]
};
