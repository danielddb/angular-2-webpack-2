const webpack = require('webpack')
const path = require('path')

const helpers = require('../helpers')
const tsLintConfig = require('../tslint.config')

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [{
        test: /\.ts$/,
        exclude: [/\.(spec|e2e)\.ts$/],
        enforce: 'pre',
        loader: 'tslint-loader',
        options: tsLintConfig
      },
      {
        test: /\.ts$/,
        exclude: [/\.(spec|e2e)\.ts$/],
        use: [{
            loader: 'angular-router-loader'
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helpers.root('tsconfig.json')
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      },
      {
        test: /\.styl$/,
        include: helpers.root('src/app'),
        loader: 'raw-loader!stylus-loader'
      },
      {
        test: /\.styl$/,
        exclude: helpers.root('src/app'),
        loader: 'null-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src'), // location of your src
      {} // a map of your routes
    ),
  ]
}
