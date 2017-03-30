'use strict'

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var qs = require('qs');
var TEMPLATE = './src/index.html';
var INDEX = 'index.html';
var ENTRY_DIR = './src/client/index.jsx';
var OUTPUT_DIR = '../build'

module.exports = {
  name: 'client',
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    ENTRY_DIR
  ],
  output: {
    path: path.resolve(path.join(__dirname, OUTPUT_DIR)),
    publicPath: '/',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        // include: path.join(__dirname, './src/app'),
        exclude: /node_modules/,
        query: {
          "env": {
            "development": {
              "presets": ["react-hmre"],
              "plugins": [
                ["react-transform", {
                  "transforms": [{
                    "transform": "react-transform-hmr",
                    "imports": ["react"],
                    "locals": ["module"]
                  }]
                }]
              ]
            }
          },
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      },
      // {
      // test: /\.css$/,
      // include: path.join(__dirname, 'client'),
      // loader: 'style-loader!css-loader?' + qs.stringify({
      //   modules: true,
      //   importLoaders: 1,
      //   localIdentName: '[path][name]-[local]'
      // })
    // }
    ]
  },
  resolve: {
    modules: [ 'app', 'node_modules' ],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({ 'React': 'react' }),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      filename: INDEX,
      template: TEMPLATE,
    }),
    new ProgressBarPlugin({ clear: false }),
  ]
}
