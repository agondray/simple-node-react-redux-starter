'use strict'

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var qs = require('qs');

var TEMPLATE = './src/index.html';
var INDEX = 'index.html';
var ENTRY_DIR = './src/assets/index.jsx';
var OUTPUT_DIR = '../build'

module.exports = {
  name: 'frontend-client',
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'inline-source-map',
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
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', },
          {
            loader: 'css-loader',
            options: { modules: true, }
          },
        ],

        // only use ExtractTextPlugin in prod - it doesn't support hot-reloading
        // loader: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         modules: true,
        //         importLoaders: 1,
        //         localIdentName: '[name]__[local]___[hash:base64:5]',
        //       },
        //     },
        //     'sass-loader'
        //   ],
        // }),
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
          name: 'images/[name].[ext]',
        },
      },
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
    // new ExtractTextPlugin("styles.css"),
    new ProgressBarPlugin({ clear: false }),
    new HtmlWebpackPlugin({
      filename: INDEX,
      template: TEMPLATE,
    }),
  ]
}
