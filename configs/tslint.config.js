const tsLintConfigStandard = require('tslint-config-standard/tslint')

module.exports = {
  configuration: {
    rulesDirectory: tsLintConfigStandard.rulesDirectory,
    rules: tsLintConfigStandard.rules
  },

  // can specify a custom config file relative to current directory or with absolute path
  // 'tslint-custom.json'
  configFile: false,

  // tslint errors are displayed by default as warnings
  // set emitErrors to true to display them as errors
  emitErrors: false,

  // tslint does not interrupt the compilation by default
  // if you want any file with tslint errors to fail
  // set failOnHint to true
  failOnHint: true,

  // enables type checked rules like 'for-in-array'
  // uses tsconfig.json from current working directory
  typeCheck: false,

  // automatically fix linting errors
  fix: false,

  // can specify a custom tsconfig file relative to current directory or with absolute path
  // to be used with type checked rules
  tsConfigFile: 'tsconfig.json'
}