'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    ifElse = require('gulp-if-else'),
    autoprefixer = require('gulp-autoprefixer'),
    importOnce = require('node-sass-import-once'),
    browserSync = require('browser-sync');

//////////////////////////////
// Internal Vars
//////////////////////////////
var toSass = [
  'sass/**/*.scss'
];

var sassSettings = {
  'outputStyle': 'expanded',
  'importer': importOnce,
  'importOnce': {
    'index': true,
    'css': false,
    'bower': true
  }
};

//////////////////////////////
// Export
//////////////////////////////
module.exports = function (gulp, SassPaths) {
  // Set value of paths to either the default or user entered
  SassPaths = SassPaths || toSass;

  //////////////////////////////
  // Encapsulate task in function to choose path to work on
  //////////////////////////////
  var SassTask = function (path, fail) {
    return gulp.src(SassPaths)
      .pipe(ifElse(fail === true, function () {
        return sass(sassSettings);
      }, function () {
        return sass(sassSettings).on('error', sass.logError);
      }))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(gulp.dest('./.www/css/'))
      .pipe(browserSync.stream());
  }

  //////////////////////////////
  // Core Task
  //////////////////////////////
  gulp.task('sass', function () {
    return SassTask(SassPaths, true);
  });

  //////////////////////////////
  // Watch Task
  //////////////////////////////
  gulp.task('sass:watch', function () {
    return gulp.watch(SassPaths)
      .on('change', function (event) {
        // Add absolute and relative (to Gulpfile) paths
        event.path = {
          absolute: event.path,
          relative: event.path.replace(__dirname.replace('/tasks', '') + '/', '')
        }

        // Notify user of the change
        gutil.log('File ' + gutil.colors.magenta(event.path.relative) + ' was ' + event.type);

        // Call the task
        return SassTask(event.path.absolute, false);
      });
  });
}
