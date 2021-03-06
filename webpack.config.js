const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HappyPack = require("happypack");
const webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    style: ["./index.scss"],
    script: ["./index.js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "./[name].bundle.css",
    }),
    new HappyPack({
      id: "happybabel",
      loaders: ["babel-loader?cacheDirectory"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
              hmr: process.env.NODE_ENV === "development",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|jpe?g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "../dist/img",
              outputPath: "./img",
            },
          },
          //圖片壓縮
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
      {
        test: /\.(js)$/,
        use: {
          //loader: "babel-loader?cacheDirectory=true",
          loader: "happypack/loader?id=happybabel",
        },
      },
    ],
  },
};
