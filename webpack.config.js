var NODE_ENV = process.env.NODE_ENV || 'development';

var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './index.js',
    vendors: [
      'angular',
      'angular-ui-router',
      'lodash',
      'mobx'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css', exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/ },
      { test: /\.(png|jpg)(\?]?.*)?$/, loader : 'file', exclude: /node_modules/ },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" },
      // { test: path.dirname(__dirname), loader: 'babel-loader' }
      { test: /\.js?$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, "node_modules")
        ]
/*        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "app/test")
        ]*/
      }

    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'test')
    }),
    new CopyWebpackPlugin([
      { from: 'index.html' }
    ]),
    new CleanWebpackPlugin(['dist'])
  ],

  devtool: "source-map"
  // devtool: "inline-source-map"

};
