const webpackConfig = require('../webpack/test.config')
const helpers = require('../helpers')

module.exports = function (config) {
  const _config = {
    basePath: helpers.root(),

    frameworks: ['jasmine'],

    files: [
      { pattern: './configs/karma/test-shim.js', watched: false }
    ],

    preprocessors: {
      './configs/karma/test-shim.js': ['coverage', 'webpack', 'sourcemap']
    },

    coverageReporter: {
      type: 'in-memory'
    },

    remapCoverageReporter: {
      'text-summary': null,
      json: './coverage/coverage.json',
      html: './coverage/html'
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress', 'coverage', 'remap-coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true
  };

  config.set(_config);
};
