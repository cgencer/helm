var jade = require('gulp-jade');
 
module.exports = function (config, gulp) {
    gulp.task('jade', function() {
        gulp.src(config.src.view + '/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest(config.dist.view));
    });
}
