'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var gutil = require('gulp-util'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

//////////////////////////////
// Internal Vars
//////////////////////////////
var toServer = [
  '.www/'
];

//////////////////////////////
// Export
//////////////////////////////
module.exports = function (gulp, ServerPaths) {
  // Set value of paths to either the default or user entered
  ServerPaths = ServerPaths || toServer;

  //////////////////////////////
  // Core Task
  //////////////////////////////
  gulp.task('browser-sync', function () {
    browserSync.init({
      'server': {
        'baseDir' : ServerPaths
      }
    })
  });
}
