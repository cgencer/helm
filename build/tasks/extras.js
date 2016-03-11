module.exports = function (config, gulp) {
    gulp.task('extras', function() {
        return gulp.src(config.sources.extras, {
            dot: true
        })
        .pipe(gulp.dest(config.paths.dist.root));
    });
}