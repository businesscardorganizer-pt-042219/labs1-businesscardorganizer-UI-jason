const webpack = require('webpack');

module.exports = {
    entry: {
        entry: __dirname + '/src/js/app.js'
    },
    output: {
        path: __dirname + '/js',
        filename: 'app.bundle.js'
    }
}
