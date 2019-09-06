const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src');

module.exports = {
  entry: path.resolve(srcDir, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(srcDir, 'index.html') }),
    new CopyWebpackPlugin(['src/sw.js', { from: 'src/assets/', to: 'assets/'}, 'src/manifest.json']),
  ]
}