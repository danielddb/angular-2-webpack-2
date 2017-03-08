const path = require('path');
require('ts-node/register');

exports.config = {

  /**
   * A base URL for your application under test. Calls to protractor.get()
   * with relative paths will be resolved against this URL (via url.resolve)
   */
  baseUrl: 'http://localhost:8080/',

  specs: [path.resolve(__dirname, '../../src/**/**.e2e.ts')],

  exclude: [],

  framework: 'jasmine',

  /**
   * The timeout in milliseconds for each script run on the browser. This
   * should be longer than the maximum time your application needs to
   * stabilize between tasks.
   */
  allScriptsTimeout: 110000,

  /**
   * Options to be passed to jasmine.
   *
   * See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
   * for the exact options available.
   */
  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },

  /**
   * If true, Protractor will connect directly to the browser Drivers
   * at the locations specified by chromeDriver and firefoxPath. Only Chrome
   * and Firefox are supported for direct connect.
   *
   * default: false
   */
  directConnect: true,

  /**
   * Protractor can launch your tests on one or more browsers. If you are
   * testing on a single browser, use the capabilities option. If you are
   * testing on multiple browsers, use the multiCapabilities array.
   *
   * For a list of available capabilities, see
   * https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
   * In addition, you may specify count, shardTestFiles, and maxInstances.
   *
   * Example:
   * capabilities: {
   *   browserName: 'chrome',
   *   name: 'Unnamed Job',
   *   logName: 'Chrome - English',
   *   count: 1,
   *   shardTestFiles: false,
   *   maxInstances: 1,
   *   specs: ['spec/chromeOnlySpec.js'],
   *   exclude: ['spec/doNotRunInChromeSpec.js'],
   *   seleniumAddress: 'http://localhost:4444/wd/hub'
   * }
   */
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
    //   'args': ['show-fps-counter=true']
    }
  }
};