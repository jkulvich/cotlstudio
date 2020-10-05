const path = require('path')
const webpack = require('webpack')

module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/'),
            },
        },
        plugins: [
            new webpack.DefinePlugin({
                APP: {
                    VERSION: JSON.stringify(process.env.APP_VERSION),
                    MODE: JSON.stringify(process.env.NODE_ENV),
                    NAME: JSON.stringify(process.env.APP_NAME),
                    HOMEPAGE: JSON.stringify(process.env.APP_HOMEPAGE),
                },
            }),
        ],
    },
}
