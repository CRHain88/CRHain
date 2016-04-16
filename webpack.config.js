const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: {
        vendor: [
            'eq.js'
        ],

        distributedColumns: './js/distributed-columns.js',
        offerings: './js/offerings.js'
    },

    output: {
        filename: 'js/[name].js',
        path: path.join(__dirname, '/dist'),
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            inject: 'body',
            filename: 'index.html',
            // Minification options:
            // https://github.com/kangax/html-minifier#options-quick-reference
            minify: {
                collapseWhitespace: true,
                minifyJS: true,
                removeComments: true
            }
        }),

        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),
    ]
}
