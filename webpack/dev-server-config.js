var webpack = require('webpack');
var path = require('path');

module.exports = {
  name: 'server',
  target: 'node',
  entry: './server.js',
  output: {
    path: path.resolve(path.join(__dirname, './build')),
    publicPath: '/',
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [ 'node_modules' ],
    extensions: ['.js']
  },
}
