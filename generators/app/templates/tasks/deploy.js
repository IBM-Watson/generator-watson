'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var sequence = require('run-sequence'),
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
  gulp.task('gh-pages', function () {
    return gulp.src(DeployPaths)
      .pipe(ghPages({
        'message': ':shipit: Update ' + new Date().toISOString()
      }));
  });

  gulp.task('deploy', function (cb) {
    return sequence(
      // Build Everything
      'build',

      // Deploy Everything
      'gh-pages',

      // Callback
      cb
    );
  });
}
