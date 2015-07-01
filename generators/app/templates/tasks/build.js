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
  gulp.task('build', function (cb) {
    return sequence(
      // Clean everything
      'clean',

      // Lint everything
      ['eslint'],

      // Build stuff
      ['copy', 'sass', 'imagemin'],

      // Callback
      cb
    );
  });
}
