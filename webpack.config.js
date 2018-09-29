const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
const env = process.env.NODE_ENV || 'development';

console.log('Building for ' + env);

module.exports = {
  // context: path.resolve(__dirname, 'src/'),
  entry: "./src/index.jsx",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, "build")
  },
  mode: env,
  watch: true,
  devtool: "cheap-module-source-map",
  devServer: {
    port: 8080,
    hot: true
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["es2015", "stage-2", "react"]
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body"
    })
  ]
}