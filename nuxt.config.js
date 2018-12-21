const { resolve } = require("path");

module.exports = {
    srcDir: resolve("./"),
    /*
    ** Headers of the page
    */
    head: {
        title: "nuxt-template",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Nuxt.js template"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: "#3B8070" },
    /*
    ** Build configuration
    */
    css: [
        // SCSS file in the project
        "@/assets/scss/main.scss"
    ],
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, { isDev, isClient }) {
            const alias = (config.resolve.alias = config.resolve.alias || {});
            const srcDir = resolve("./") + "/";
            alias["fonts"] = srcDir + "assets/fonts";
            alias["img"] = srcDir + "assets/img";
            alias["media"] = srcDir + "assets/media";

            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                });

                config.module.rules.push({
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /(node_modules)/
                });
            }
        }
    }
};
