const webpack = require("webpack");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("../webpack/config");
const webpackIsoDevMiddleware = require("webpack-isomorphic-dev-middleware");
const webpackHotReload = require("webpack-hot-middleware");

const clientCompiler = webpack(config.client);
const serverCompiler = webpack(config.server);
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(__dirname + "../static"));
server.use(cookieParser());
server.use(webpackIsoDevMiddleware(clientCompiler, serverCompiler));
server.use(webpackHotReload(clientCompiler, { quiet: true }));

server.get("/", (req, res) => {
  const render = res.locals.isomorphic.exports.default;
  render(req, res);
  // res.sendFile("../dist/client/[name].js")
});

server.listen(3000, () => {
  console.log("Server listening on port:3000");
});
