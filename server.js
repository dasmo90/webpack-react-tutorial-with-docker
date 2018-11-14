const port = process.env.PORT ? process.env.PORT : 3000;

const express = require("express");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const httpProxy = require("http-proxy");
const config = require("./webpack.config.js");
config.mode = process.env.MODE ? process.env.MODE : "production";

const compiler = webpack(config);
const bundler = new WebpackDevServer(compiler, {
  hot: true,
  quiet: false,
  noInfo: true,
  stats: {
    colors: true
  }
});

// We fire up the development server and give notice in the terminal
// that we are starting the initial bundle
bundler.listen(8080, "localhost", function () {
  console.log("Bundling project, please wait...");
});

const proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

const app = express();

app.all('/*', function (req, res) {
  proxy.web(req, res, {
    target: 'http://localhost:8080'
  });
});

proxy.on('error', function() {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});