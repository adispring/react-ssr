const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    mode: 'development',
    entry: [path.resolve(path.join(__dirname, './src/server/index.js'))],
    output: {
      path: __dirname,
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, 'node_modules')],
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
        },
      ],
    },
  },
  {
    mode: 'development',
    entry: [path.resolve(path.join(__dirname, './src/client/index.js'))],
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },
];
