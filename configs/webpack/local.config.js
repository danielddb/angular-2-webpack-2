const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const commonConfig = require('./common.config');


module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.resolve(__dirname, '../../dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        stats: 'minimal',
        proxy: [{
            context: '/mock-api',
            target: 'http://localhost:3000',
            pathRewrite: {
                '^/mock-api' : '/'
            }
        }],
        historyApiFallback: true
    }
});