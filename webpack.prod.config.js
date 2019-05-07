const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new htmlPlugin({
            template: './src/html/index.html',
            filename: '../index.html'
        }),
        new htmlPlugin({
            template: './src/html/about.html',
            filename: '../about.html'
        }),
        new htmlPlugin({
            template: './src/html/features.html',
            filename: '../features.html'
        }),
        new htmlPlugin({
            template: './src/html/contact.html',
            filename: '../contact.html'
        }),
    ],
    entry: {
        entry: __dirname + '/src/js/app.js'
    },
    output: {
        path: __dirname + '/js',
        filename: 'app.bundle-[contenthash].min.js'
    }
}
