const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",
    "./src/main",
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery", //這邊以上是新增
    }),
    new HtmlWebpackPlugin({
      title: "測試",
      inject: true,
      template: "./src/index.html",
      filename: "index.html",
      // chunks: [],
    }),
    new HtmlWebpackPlugin({
      title: "測試分頁",
      inject: true,
      template: "./src/views/roomInfo.html",
      filename: "views/roomInfo.html",
      // chunks: [],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          // [css-loader](/loaders/css-loader)
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  devServer: {
    static: "./dist",
    // contentBase: path.join(__dirname, "dist"),
    open: true,
  },
};
