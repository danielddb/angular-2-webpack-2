const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const helpers = require('../helpers')
const commonConfig = require('./common.config')

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    port: 9000,
    stats: 'minimal',
    proxy: [
      {
        context: '/mocks',
        target: 'http://localhost:9010',
        pathRewrite: {
          '^/mocks': '/'
        }
      }
    ],
    historyApiFallback: true
  }
})
