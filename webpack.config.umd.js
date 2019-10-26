const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: {
    'react-virtualized-select': './source/index.js'
  },
  output: {
    path: 'dist/umd',
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'VirtualizedSelect'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  },
  plugins: [
    new ExtractTextPlugin('../styles.css', {
      allChunks: false,
      beautify: true,
      mangle: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: true,
      comments: true,
      mangle: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'source')
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract('css-loader!autoprefixer-loader?{browsers:["last 2 version", "Firefox 15"]}'),
        include: path.join(__dirname, 'source')
      }
    ]
  }
}
