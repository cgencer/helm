module.exports = function (app) {

    var gulp = require('gulp');

    gulp.task('default', ['clean'], function() {
        gulp.start('build');
    });
}