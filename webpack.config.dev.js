const merge = require('webpack-merge');
const globalConfig = require('./webpack.config.js');

module.exports = merge(globalConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    contentBase: 'src',
    watchContentBase: true,
    hot: true,
    open: true,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
  },
});
