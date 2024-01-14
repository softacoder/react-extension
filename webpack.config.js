const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/test/tsx",
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".tsx", ".js"],
  },
  output: {
    filename: "idex.js",
    path: path.resolve(__dirname, "dist"),
  },
};
