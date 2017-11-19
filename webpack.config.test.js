const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './app/scripts/app.js'),
  output: {
    filename: 'bundle.test.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'none',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'null-loader'
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        loader: 'null-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'null-loader'
      }
    ]
  },
  plugins: []
};
