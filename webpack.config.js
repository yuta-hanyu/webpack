module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js",
    globalObject: "self",
  },
  mode: "development",
  devServer: {
    static: "public",
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: { loader: "worker-loader" },
      },
    ],
  },
}
