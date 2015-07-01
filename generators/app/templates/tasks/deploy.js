'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var gutil = require('gulp-util'),
    ghPages = require('gulp-gh-pages');

//////////////////////////////
// Internal Vars
//////////////////////////////
var toDeploy = [
  '.www/**/*'
];

//////////////////////////////
// Export
//////////////////////////////
module.exports = function (gulp, DeployPaths) {
  // Set value of paths to either the default or user entered
  DeployPaths = DeployPaths || toDeploy;

  //////////////////////////////
  // Core Task
  //////////////////////////////
  gulp.task('deploy', function () {
    return gulp.src(DeployPaths)
      .pipe(ghPages({
        'message': ':shipit: Update ' + new Date().toISOString()
      }));
  });
}
