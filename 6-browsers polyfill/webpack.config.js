const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

let baseConfig = {
  entry: "./app/app.js",
  output: {
    path: path.resolve(__dirname, "app/dist"),
    filename: "app.bundle.js",
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "env",
                {
                  debug: true,
                  targets: {
                    browsers: ["last 2 chrome versions"]
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "app"),
    compress: false,
    hotOnly: true,
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
  }
};
