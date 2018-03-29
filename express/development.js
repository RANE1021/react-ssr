const webpack = require("webpack");
const express = require("express");
const path = require("path");
const config = require("../webpack/config");
const webpackIsoDevMiddleware = require("webpack-isomorphic-dev-middleware");
const webpackHotReload = require("webpack-hot-middleware");

const clientCompiler = webpack(config.client);
const serverCompiler = webpack(config.server);
const server = express();

server.use(webpackIsoDevMiddleware(clientCompiler, serverCompiler));

server.use(webpackHotReload(clientCompiler, { quiet: true }));

server.get("*", (req, res, next) => {
  //Some Server weback config will make this work
  console.log("Isomorphic Export", res.locals.isomorphic.exports);
  const { render } = res.locals.isomorphic.exports;

  render(req, res);
});

server.listen(3000, () => {
  console.log("Server listening on port:3000");
});
