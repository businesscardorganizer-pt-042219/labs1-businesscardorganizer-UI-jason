const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new htmlPlugin({
            template: './src/html/index.html'
        })
    ],
    entry: {
        entry: __dirname + '/src/js/app.js'
    },
    output: {
        path: __dirname + '/src',
        filename: 'app.bundle.js'
    }
}
