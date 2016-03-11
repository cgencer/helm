module.exports = function (config, gulp) {
    gulp.task('serve', ['connect', 'styles', 'browserify'], function() {
        require('opn')(config.hosts.local);
    });
}