var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: `${SRC_DIR}/ItemDesc.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.(jsx|js)?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test : /\.css?/,
        use : [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
plugins: [
    new MiniCssExtractPlugin({
      filename: 'css.bundle.css',
    })
  ]
};