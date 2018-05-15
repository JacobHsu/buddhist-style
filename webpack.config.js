const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  plugins: [
    new CopyWebpackPlugin([
      { from: '*.html' },
      { from: './images/*.png' },
      { from: './images/*.jpg' },
    ])
  ],
  module: {
    rules: [{
      test: /\.(s)*css$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(jpg|png)$/,
      loaders: [
        'url-loader'
      ]
    }, {
      test: /\.js$/,
      loaders: [
        'babel-loader?presets[]=es2015'
      ]
    }]
  }
}
