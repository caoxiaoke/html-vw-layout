'use strict';
const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('./webpack.dev.conf');

const options = {
  contentBase: path.resolve(__dirname, 'src/tpl'),
  publicPath: '/',
  hot: true,
  port: 8080,
  host: 'localhost',
  stats: {
    colors: true
  }
}

WebpackDevServer.addDevServerEntrypoints(webpackDevConfig, options);

const compiler = Webpack(webpackDevConfig);
const server = new WebpackDevServer(compiler, options);

server.listen(8080, '0.0.0.0', () => {
  console.log('Starting server on http://localhost:8080');
});
