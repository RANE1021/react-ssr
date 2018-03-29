const webpack = require("webpack");
const path = require("path");

const rootPath = path.resolve(__dirname, "../../");

module.exports = {
  mode: "development",
  entry: {
    app: `${rootPath}/src/server.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    path: `${rootPath}/dist/server`,
    publicPath: "/",
    filename: "[name].js"
  }
};