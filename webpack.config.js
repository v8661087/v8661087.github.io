const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    index: ["./index.scss"],
    modal: ["./modal.js"],
    scroll: ["./scroll.js"],
    smooth_scroll: ["./smooth_scroll.js"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./[name].bundle.css"
    }),
    new webpack.HotModuleReplacementPlugin()
    /*new HtmlWebpackPlugin({
      template: "../index.html",
      minify: {
        removeComments: true,
        collapseWhitespace:true
      }
    })*/
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|jpe?g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "./img",
              outputPath: "./img"
            }
          },
          //圖片壓縮
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./dist',
    hot:true
},
};
