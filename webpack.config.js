const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["regenerator-runtime/runtime.js","./src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "/dist"),  
    port: 3000,
    open: true,
    historyApiFallback: {
      disableDotRule: true
  },
  watchContentBase: true
},
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ]
}