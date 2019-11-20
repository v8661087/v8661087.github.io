var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    index: ["./index.scss"],
    modal: ["./modal.js"],
    scroll: ["./scroll.js"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./[name].bundle.css"
    })
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
      }
      /*{
      test: /\.(png|jpg|gif|jpe?g|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: './img',
            outputPath: './img'
          }  
        }
      ]
}*/
    ]
  }
};
