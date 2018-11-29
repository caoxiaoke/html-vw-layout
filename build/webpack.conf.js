var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var config = require('./conf.js');

var webpackConfig = {
  entry: {},
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ],
        include: config.srcRoot
      },
		{
			test: require.resolve('zepto'),
			loader: 'exports-loader?window.Zepto!script-loader'
		}
    ]
  },
  plugins: [
    new WebpackCleanupPlugin(),
  ]
}


let filenames = fs.readdirSync(path.resolve(config.srcRoot, 'tpl'));

filenames.forEach(function (filename) {
  let stats = fs.statSync(path.resolve(config.srcRoot, 'tpl', filename));
  if (stats.isFile()) {
    let extension = path.extname(filename);
    let name = filename.substring(0, filename.lastIndexOf(extension));
    console.log('>>> ', name);
    webpackConfig.entry[name] = path.resolve(config.srcRoot, 'js', name + '.js')
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
      filename: name + '.html',
      template: path.resolve(config.srcRoot, 'tpl', name + '.html'),
      inject: true,
      chunks: ['common', name] //只包含 common 以及自己的那一个 chunk
    }));
  }
});

module.exports = webpackConfig;
