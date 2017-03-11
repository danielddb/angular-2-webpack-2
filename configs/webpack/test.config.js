const webpack = require('webpack')
const path = require('path')

const helpers = require('../helpers')
const tsLintConfig = require('../tslint.config')

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    alias: {
      '@': helpers.root('src')
    },
    extensions: ['.ts', '.js'],
    modules: [helpers.root('src'), 'node_modules']
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular')
        ]
      },
      {
        test: /\.ts$/,
        exclude: [/\.e2e\.ts$/],
        enforce: 'pre',
        loader: 'tslint-loader',
        options: tsLintConfig
      },
      {
        test: /\.ts$/,
        exclude: [/\.e2e\.ts$/],
        use: [{
            loader: 'angular-router-loader'
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              sourceMap: false,
                inlineSourceMap: true,
                compilerOptions: {

                  // Remove TypeScript helpers to be injected
                  // below by DefinePlugin
                  removeComments: true

                }
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
      },
      {
        enforce: 'post',
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        include: helpers.root('src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
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
