'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync');

//////////////////////////////
// Internal Vars
//////////////////////////////
var toUglify = [
  'js/**/*.js'
];

//////////////////////////////
// Export
//////////////////////////////
module.exports = function (gulp, UglifyPaths) {
  // Set value of paths to either the default or user entered
  UglifyPaths = UglifyPaths || toUglify;

  //////////////////////////////
  // Encapsulate task in function to choose path to work on
  //////////////////////////////
  var UglifyTask = function (path, dist) {
    var settings = {
      'mangle': dist ? true : false,
      'compress': dist ? true : false,
      'preserveComments': dist ? 'some' : 'all'
    }
    return gulp.src(UglifyPaths)
      .pipe(uglify(settings))
      .pipe(gulp.dest('.www/js/'))
      .pipe(browserSync.stream());
  }

  //////////////////////////////
  // Core Task
  //////////////////////////////
  gulp.task('uglify', function () {
    return UglifyTask(UglifyPaths, true);
  });

  //////////////////////////////
  // Watch Task
  //////////////////////////////
  gulp.task('uglify:watch', function () {
    return gulp.watch(UglifyPaths)
      .on('change', function (event) {
        // Add absolute and relative (to Gulpfile) paths
        event.path = {
          absolute: event.path,
          relative: event.path.replace(__dirname.replace('/tasks', '') + '/', '')
        }

        // Notify user of the change
        gutil.log('File ' + gutil.colors.magenta(event.path.relative) + ' was ' + event.type);

        // Call the task
        return UglifyTask(event.path.absolute, false);
      });
  });
}
