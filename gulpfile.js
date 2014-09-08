(function () {
  'use strict';

  var gulp = require('gulp');

  gulp.task('karma', function (callback) {

    var conf = require('./config/karma.conf.js')();

    var server = require('karma').server;

    return server.start(conf, function (exitCode) {
      console.log('Karma has exited with ' + exitCode);
      process.exit(exitCode);
    });

  });

})();
