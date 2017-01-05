var gulp          = require('gulp');
var isBlog        = require('../util/isBlog');
var sequence      = require('run-sequence');

gulp.task('build', function(done) {
  if(isBlog) {
    sequence('clean', 'jekyll-build', 'deploy-blog', done);
  } else {
    sequence('clean', 'jekyll-build', 'deploy-marketing', done);
  }
});
