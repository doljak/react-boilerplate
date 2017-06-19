const common = require('./webpack-common.config.js')
const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const color_rgba_fallback = require('postcss-color-rgba-fallback');
const opacity = require('postcss-opacity');
const pseudoelements = require('postcss-pseudoelements');
const vmin = require('postcss-vmin');
const pixrem = require('pixrem');
const will_change = require('postcss-will-change');
const cssnext = require("postcss-cssnext")

module.exports = {
  context: common.context,
  entry: common.entry,
  output: Object.assign({}, common.output, {
    path: path.resolve('public_html', '_dist/vendor/'),
    filename: '[name].bundle.min.js',
  }),
  module: {
    rules: common.module.rules.concat({
      test: /\.s?css$/,
      use:ExtractTextPlugin.extract({ 
        fallback: 'style-loader',
        use:'css-loader!sass-loader!postcss-loader?parser=postcss-scss',
      })
    }),
  },
  resolve: common.resolve,
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        postcss: [
          color_rgba_fallback(),
          opacity(),
          pseudoelements(),
          vmin(),
          pixrem(),
          will_change(),
          cssnext()
        ]
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 1000 }),
    new ExtractTextPlugin('hello.min.css')
  ],
}