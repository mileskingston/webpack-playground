const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: '/\.css$/', use: 'css-loader'}
        ]
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};