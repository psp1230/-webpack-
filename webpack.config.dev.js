const path = require("path");
const fs = require("fs")
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const jsFiles = './src/js'
const jsEntry = fs.readdirSync(jsFiles).reduce((accumulator, file) => {
  const fileName = file.replace('.js', '')
  accumulator[fileName] = `${jsFiles}/${fileName}`
  return accumulator
}, {})

const htmlFiles = './src/views'
const htmlConfig = fs.readdirSync(htmlFiles).map(file => new HtmlWebpackPlugin({
  title: "hotelbooking",
  inject: "body",
  template: `${htmlFiles}/${file}`,
  filename: `${file}`,
  chunks: [`${file.replace('.html', '')}`],
}));

module.exports = {
  mode: "development",
  entry: jsEntry,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name]-[contenthash:8].bundle.js",
    assetModuleFilename: "assets/[name][ext]",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery", //這邊以上是新增
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),
    new CopyPlugin({ patterns: [{ from: "./src/assets", to: "./assets" }] }),
    new HtmlWebpackPlugin({
      title: "hotelbooking",
      inject: "body",
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    ...htmlConfig
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          // [css-loader](/loaders/css-loader)
          {
            loader: "css-loader",
            // options: {
            //   modules: { localIdentName: '[name]-[local]-[hash:base64:5]' },
            // },
          },
          // {
          //   loader: "sass-loader",
          // },
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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: "./dist",
    // contentBase: path.join(__dirname, "dist"),
    open: true,
  },
};
