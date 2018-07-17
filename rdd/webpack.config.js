/* 
* This file was generated with webpack-create-config version 1.0.0 
* please run the following command to install dependencies
* npm install --save-dev webpack
* or with yarn
* yarn add webpack
*/
const path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
            },
        },
        {
          test: /\.scss$/,
          use:[ MiniCssExtractPlugin.loader,
          { loader: "css-loader",  options: { minimize: true }},
          { loader: "postcss-loader", options: {
            plugins: () => [require('autoprefixer')({
                'browsers':[
                    "last 3 versions",
                    "ie >=9"
                ]
            })],
        }},
        { loader: "sass-loader", options: {} }
      ]
    }
]},
        plugins: [ 
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
      new HtmlWebpackPlugin({
        inject: true,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      })
    ]
  };