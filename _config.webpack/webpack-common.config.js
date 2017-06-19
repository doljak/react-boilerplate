const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: path.resolve('_src', '', 'index.js'),
  },
  output: {
    path: path.resolve('public_html', '_js'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets:['es2015','stage-0', 'stage-1', 'stage-2', 'stage-3', 'react'],
          plugins:['transform-decorators-legacy']
        }
      },
    ],
  },
  resolve: {
    alias:{  
    },
    extensions: ['.js', '.jsx']
  },
};
