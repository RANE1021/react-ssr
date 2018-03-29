const webpack = require("webpack")

const devClient = require("./client/dev.config")
const devServer = require("./server/dev.config")

module.exports = {
    client: devClient,
    server: devServer
}