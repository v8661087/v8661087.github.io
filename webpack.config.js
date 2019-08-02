var path = require('path');
var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports={
    context: path.resolve(__dirname, 'src'),
    entry:{
      index:['./style.css'],
      modal:['./modal.js'],
      scroll:['./scroll.js']
    },
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    mode: 'production',
    plugins:[
      new MiniCssExtractPlugin({
        filename: "./style.bundle.css",
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer()
            ]
        }
      }),
      /*new OptimizeCssAssetsPlugin({assetNameRegExp: /\.css$/g,
        cssProcessorOptions: {
          safe: true,
          autoprefixer: { disable: true },
          mergeLonghand: false,
          discardComments: {
            removeAll: true // 移除注释
          }
        },
        canPrint: true
      })*/
    ],
    module: {
      rules: [
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader"
            ]
        }
      ]
    },
    
}