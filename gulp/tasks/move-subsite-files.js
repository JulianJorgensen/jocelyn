var gulp          = require('gulp');

gulp.task('deploy-blog', function(done) {
  // move blog specific pages into root dir
  // return gulp.src(['_site/joyfullee.com/**/*']).pipe(gulp.dest('./_site'));
});

gulp.task('deploy-marketing', function(done) {
  // move marketing specific pages into root dir
  // return gulp.src(['_site/jocelynlee.ca/**/*']).pipe(gulp.dest('./_site'));
});
