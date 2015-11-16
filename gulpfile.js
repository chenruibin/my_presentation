var gulp = require('gulp');
var gp_deploy = require('gulp-gh-pages');

var options = {
}

gulp.task('default', function () {
  return gulp.src(['./build/**/*', '!./node_modules/**'])
  .pipe(gp_deploy(options));
});

