const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
module.exports = {
  devtool: 'eval',
  entry: {
    demo: './source/demo/Application'
  },
  output: {
    path: path.join(__dirname, 'build'),
    // path: './build',
    filename: 'static/[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: './index.html'
    })
    // new webpack.NoErrorsPlugin(),
    // new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        include: path.join(__dirname, 'source')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'postcss-loader'
        ],
        include: path.join(__dirname, 'source')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: path.join(__dirname, 'styles.css')
      }
    ]
  },
  devServer: {
    contentBase: 'build',
    port: 3002
  }
}
