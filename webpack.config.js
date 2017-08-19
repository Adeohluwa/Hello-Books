const path = require('path');
const nodeExternals = require('webpack-node-externals');

// const webpack = require('webpack');

module.exports = {
  entry: './app.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  // devtool: 'source-map',
};
