module.exports = function (config, gulp) {
    gulp.task('default', ['clean'], function() {
        gulp.start('build');
    });
}