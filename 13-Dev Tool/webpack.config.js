const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const babelLoader = require("./babel-loader");

let baseConfig = {
  entry: "./app/app.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "app/dist"),
    filename: "app.bundle.js",
    publicPath: "/dist/"
  },
  devServer: {
    contentBase: path.join(__dirname, "app"),
    compress: false,
    hotOnly: true,
    // overlay: true,
    port: 3000
  },
  plugins: []
};

//https://github.com/babel/babel/tree/master/packages/babel-preset-env

module.exports = function(env) {
  let isDev = env == "development";
  if (isDev) {
    return merge(baseConfig, {
      plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ]
    });
  } else {
    return merge(baseConfig, babelLoader);
  }
};

/*https://babeljs.io/docs/plugins/preset-env/#options*/
