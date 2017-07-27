/* eslint-env node */

const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: __dirname,
    entry: {
        app: './code/entry.js',
        vendor: ['ramda']
    },
    devtool: 'eval',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    devServer: {
        publicPath: '/dist/',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                use: {
                    loader: 'json-loader'
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                include: path.resolve(__dirname, 'code')
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name:'vendor', filename: 'vendor.bundle.js'})
    ]
}
