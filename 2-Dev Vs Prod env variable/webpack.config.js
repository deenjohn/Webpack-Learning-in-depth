const path = require("path");
const webpack = require("webpack");

let baseConfig = {
  entry: "./app/app.js",
  output: {
    path: path.resolve(__dirname, "app/dist"),
    filename: "app.bundle.js",
    publicPath: "/dist/"
  },
  devServer: {
    contentBase: path.join(__dirname, "app"),
    compress: true,
    hotOnly: true,
    port: 3000
  },
  plugins: []
};

module.exports = function(env) {
  let isDev = env == "development";
  if (isDev) {
    baseConfig.plugins.push(
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    );
  }
  return baseConfig;
};
