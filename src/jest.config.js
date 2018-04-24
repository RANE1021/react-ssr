module.exports = {
  testRegex: "src/.*\\.test\\.js$",
  coverageDirectory: "<rootDir>/test/coverage",
  cacheDirectory: "<rootDir>/test/cache",
  setupFiles: ["./test/setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  notify: false,
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/*.test.js",
    "!node_modules/**"
  ]
}
