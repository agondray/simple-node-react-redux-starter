var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
// var locals = {
//   routes: ['/']
// };

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/app/index.jsx',
  output: {
    path: path.resolve(path.join(__dirname, '../build')),
    // publicPath: 'http://127.0.0.1:1337',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      // {
      //   test: /\.js$/,
      //   loaders: ['babel-loader?presets[]=es2015,presets[]=stage-2,presets[]=react,plugins[]=transform-runtime'],
      //   include: __dirname + '../src/app',
      // },
      // {
      //   test: /\.jsx$/,
      //   loaders: ['jsx', 'babel-loader?presets[]=es2015,presets[]=stage-2,presets[]=react,plugins[]=transform-runtime'],
      //   include: __dirname + '../src/app',
      // },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        include: __dirname + '../src/app',
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({ clear: false }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/app/index.html'
    }),
    // new StaticSiteGeneratorPlugin('main', locals.routes),
    new ExtractTextPlugin("styles.css"),
  ]
}
