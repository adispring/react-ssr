const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = [
  {
    name: 'client',
    target: 'web',
    entry: [
      'babel-polyfill',
      path.resolve(path.join(__dirname, './src/client/index.js')),
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './public',
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        publicPath: '/public',
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      }),
      new webpack.DefinePlugin({
        __isBrowser__: true,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
      filename: 'bundle.js',
    },
  },
  {
    name: 'server',
    target: 'node',
    mode: 'development',
    entry: [
      'babel-polyfill',
      path.resolve(path.join(__dirname, './src/server/index.js')),
    ],
    plugins: [
      new CleanWebpackPlugin(['public']),
      new webpack.DefinePlugin({
        __isBrowser__: false,
      }),
    ],
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
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'isomorphic-style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          ],
        },
      ],
    },
  },
];
