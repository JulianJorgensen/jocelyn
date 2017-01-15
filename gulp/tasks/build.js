var gulp          = require('gulp');
var isBlog        = require('../util/isBlog');
var sequence      = require('run-sequence');

gulp.task('build', function(done) {
    sequence('clean', 'jekyll-build', done);
  }
});
