const webpack = require('webpack');
const path = require('path');

const tsLintConfig = require('../tslint.config');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: tsLintConfig
            },
            {
                test: /\.ts$/,
                exclude: [/\.(spec|e2e)\.ts$/],
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: path.resolve(__dirname, '../../tsconfig.json')
                        }
                    },
                    'angular-router-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null-loader'
            },
            {
                test: /\.styl$/,
                include: path.resolve(__dirname, '../../src/app'),
                loader: 'raw-loader!stylus-loader'
            },
            {
                test: /\.styl$/,
                exclude: path.resolve(__dirname, '../../src/app'),
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
            path.resolve(__dirname, '../../src'), // location of your src
            {} // a map of your routes
        ),
    ]
}