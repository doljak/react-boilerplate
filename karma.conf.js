var webpackConfig = require('./_config.webpack/webpack-dev.config.js')

module.exports = function (config) {
  config.set({
    browsers: ['jsdom'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['./_src/**/*.test.js'],
    preprocessors: {
      './_src/**/*.test.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};