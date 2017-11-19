const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './app/scripts/app.js'),
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: process.env.PROD ? 'none' : 'eval-source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /Material-Design-Iconic-Font(\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?))/,
        loader: 'file-loader?name=[name].[ext]&outputPath=/fonts/'
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        loader: 'html-loader',
        options: {
          minimize: true,
          removeComments: false,
          collapseWhitespace: true
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new SassLintPlugin({
      configFile: '.sass-lint.yml',
      glob: 'app/**/*.scss',
      quiet: false,
      failOnWarning: false,
      failOnError: true,
      testing: false
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].bundle.css',
      allChunks: true
    })
  ]
};
