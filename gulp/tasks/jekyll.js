var config        = require('../util/loadConfig').jekyll;
var gulp          = require('gulp');
var spawn         = require('cross-spawn');

gulp.task('jekyll-build', function(done) {
  // Spawn jekyll commands
  return spawn('jekyll', ['build'], {stdio: 'inherit'})
  .on('close', done);
});
