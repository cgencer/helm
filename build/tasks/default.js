module.exports = function (config, gulp) {
//  gulp.task('default', ['clean'], function() {
    gulp.task('default', [], function() {
        gulp.start('build');
    });
}