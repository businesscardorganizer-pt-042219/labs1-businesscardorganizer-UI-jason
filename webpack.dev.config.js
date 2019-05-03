const webpack = require('webpack');

module.exports = {
    entry: {
        entry: __dirname + '/src/js/app.js'
    },
    output: {
        path: __dirname + '/src/js',
        filename: 'app.bundle.js'
    }
}
