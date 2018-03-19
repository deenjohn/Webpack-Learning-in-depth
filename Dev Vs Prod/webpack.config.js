const path = require("path");
const webpack = require("webpack");
let env = process.env.NODE_ENV;
let isDev = env == "development";
console.log(env);
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
  plugins: [new webpack.NamedModulesPlugin()]
};

if (isDev) {
  console.log("dev");
  baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}
console.log(baseConfig.plugins);
module.exports = baseConfig;
