const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.jsx"
  },
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    historyApiFallback: true,
    port: 3000,
    hot: true,
    proxy: {
      "/api/": {
        target: "https://localhost:44389/",
        secure: false
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: ["file-loader"]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              mimetype: "application/font-woff"
            }
          }
        ]
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              mimetype: "application/octet-stream"
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")
              ],
              sourceMap: true
            }
          }, {
            loader: "sass-loader",
            options: {
              includePaths: [path.resolve(__dirname, "src")],
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      src: path.resolve(__dirname, "src/")
    }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
      favicon: "src/favicon.ico",
      inject: "body"
    })
  ],
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  }
};