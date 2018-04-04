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
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }
      }
    ]
  },
  target: "node",
  output: {
    path: `${rootPath}/dist/server`,
    publicPath: "/",
    filename: "[name].js",
    libraryTarget: "commonjs2"
  }
};
