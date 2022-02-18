/* eslint-disable @typescript-eslint/no-var-requires */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  target: 'node',
  optimization: {
    minimize: false
  },
  devtool: 'source-map',
  stats: {
    preset: 'summary',
    modules: true,
    modulesSpace: 50,
    modulesSort: 'size'
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    mainFields: ['main', 'module'],
    alias: {}
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: 'tsconfig.json'
            }
          }
        ]
      }
    ]
  },
  externals: ['pg'],
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
