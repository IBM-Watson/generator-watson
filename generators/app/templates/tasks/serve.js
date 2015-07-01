'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var sequence = require('run-sequence');

//////////////////////////////
// Export
//////////////////////////////
module.exports = function (gulp) {

  //////////////////////////////
  // Core Task
  //////////////////////////////
  gulp.task('serve', function (cb) {
    return sequence(
      // Clean everything
      'build',

      // Lint everything
      ['browser-sync', 'watch'],

      // Callback
      cb
    );
  });
}
