const path = require("path");
const glob = require("glob");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Create a new html plugin to create each page
const generateHTMLPlugins = () =>
  glob.sync("./src/**/*.html").map(
    dir =>
      new HtmlWebPackPlugin({
        filename: path.basename(dir), // Output
        template: dir // Input
      })
  );

module.exports = {
  entry: ["./src/js/index.js", "./src/styles/main.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[hash].css"
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/static/",
        to: "./static/"
      }
    ]),
    ...generateHTMLPlugins()
  ],
  stats: {
    colors: true
  },
  devtool: "source-map"
};
