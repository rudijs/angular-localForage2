'use strict';

module.exports = function (config) {

  return {

    // base path, that will be used to resolve files and exclude
    basePath: './',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // jasmine-as-promised for localForage Karma tests
      'node_modules/jasmine-as-promised/src/jasmine-as-promised.js',
      'app/bower_components/localforage/dist/localforage.js',

      'app/bower_components/angular/angular.min.js',
      'app/bower_components/angular-mocks/angular-mocks.js',

      'app/modules/**/*.js'

    ],

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    //reporters: ['progress'],
    reporters: ['progress', 'coverage'],

    // coverage
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      //'app/services/!(*_spec)+(.js)': ['coverage'],
      'app/components/**/!(*_spec)+(.js)': ['coverage']
    },

    coverageReporter: {
      type: 'html',
      dir: 'test/coverage/'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: 'LOG_INFO',

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  }
};
