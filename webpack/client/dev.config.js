const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const rootPath = path.resolve(__dirname, "../../");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    app: `${rootPath}/src/client.js`
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
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }
      },
      {
        test: /\.css$/,
        use: ["css-loader"]
      }
    ]
  },
  output: {
    path: `${rootPath}/dist/client`,
    publicPath: "/",
    filename: "[name].js"
  }
};
