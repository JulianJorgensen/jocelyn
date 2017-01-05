try
{
  var config      = require('../util/loadConfig').watch;
  var gulp        = require('gulp');

  // Watch files for changes, recompile/rebuild and reload the browser
  gulp.task('watch', function() {
    gulp.watch(config.pages, ['jekyll-incremental']);
    gulp.watch(config.data, ['clean', 'jekyll-incremental']);
    gulp.watch(config.images, ['jekyll-incremental']);
  });
}
catch (e)
{
}
