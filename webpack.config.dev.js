const HtmlWebpackPlugin = require('html-webpack-plugin')
// const autoprefixer = require('autoprefixer')
const path = require('path')
const webpack = require('webpack')
console.log(webpack)
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
            presets: ['@babel/preset-env'],
          }
        },
        include: path.join(__dirname, 'source')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          // 'postcss-loader'
        ],
        include: path.join(__dirname, 'source')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?importLoaders=1'],
        include: path.join(__dirname, 'styles.css')
      }
    ]
  },
  // postcss: function () {
  //   return [autoprefixer]
  // },
  devServer: {
    contentBase: 'build',
    port: 3002
  }
}
