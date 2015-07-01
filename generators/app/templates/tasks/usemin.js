'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    rev = require('gulp-rev');

//////////////////////////////
// Internal Vars
//////////////////////////////
var toUsemin = [
  '.www/**/*.html'
];

//////////////////////////////
// Export
//////////////////////////////
module.exports = function (gulp, UseminPaths) {
  // Set value of paths to either the default or user entered
  UseminPaths = UseminPaths || toUsemin;

  //////////////////////////////
  // Encapsulate task in function to choose path to work on
  //////////////////////////////
  var UseminTask = function (path) {
    return gulp.src(UseminPaths)
      .pipe(usemin({
        'css': [
          minifyCSS(),
          'concat'
        ],
        'html': [
          minifyHTML({
            'empty': true
          })
        ],
        'js': [
          uglify()
        ],
        'inlinejs': [
          uglify()
        ],
        'inlinecss': [
          minifyCSS(),
          'concat'
        ]
      }))
      .pipe(gulp.dest('.www/'));
  }

  //////////////////////////////
  // Core Task
  //////////////////////////////
  gulp.task('usemin', function () {
    return UseminTask(UseminPaths);
  });
}
