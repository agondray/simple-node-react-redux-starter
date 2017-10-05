'use strict'

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var Dotenv = require('dotenv-webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var qs = require('qs');

var TEMPLATE = './src/index.html';
var INDEX = 'index.html';
var JSX_ENTRY_PATH = './src/assets/index.jsx';
var CSS_ENTRY_PATH = './src/assets/stylesheets/main.scss';
var OUTPUT_PATH = '../build';

module.exports = {
  name: 'frontend-client',
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    JSX_ENTRY_PATH,
    CSS_ENTRY_PATH,
  ],
  output: {
    path: path.resolve(__dirname, OUTPUT_PATH),
    publicPath: '/',
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        // IMPORTANT:
        // only use ExtractTextPlugin in prod - it doesn't support hot-reloading
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
            name: 'images/[name].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ProgressBarPlugin({ clear: false }),
    new webpack.ProvidePlugin({ React: 'react' }),
    new ExtractTextPlugin({
      filename: 'stylesheets/[name].bundle.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: INDEX,
      template: TEMPLATE,
    }),
    new Dotenv({
      path: './.env',
    }),
  ],
};
