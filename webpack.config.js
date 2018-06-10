const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV === 'production';
const productionPluginDefine = isProduction
  ? [
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify('production') },
      }),
    ]
  : [];

module.exports = [
  {
    mode: 'development',
    entry: [path.resolve(path.join(__dirname, './src/server.js'))],
    output: {
      path: path.resolve(__dirname, './dist'),
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
    plugins: productionPluginDefine,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      ],
    },
  },
];