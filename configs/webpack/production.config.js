const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ngcWebpack = require('ngc-webpack')
const path = require('path')

const helpers = require('../helpers')
const commonConfig = require('./common.config')

const ENV = process.env.NODE_ENV = process.env.ENV = 'production'

module.exports = webpackMerge.smart(commonConfig, {
  devtool: 'source-map',

  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.aot.ts'
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/\.(spec|e2e)\.ts$/],
        use: [{
            loader: 'angular-router-loader',
            options: {
              aot: true,
              genDir: 'aot'
            }
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.aot.json'
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true,
        screw_ie8: true
      },
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    }),
    new ngcWebpack.NgcWebpackPlugin({
      disabled: false,
      tsConfig: helpers.root('tsconfig.aot.json')
    }),
  ]
})
