module.exports = function (app) {

    var gulp = require('gulp');

    gulp.task('build', ['html', 'images', 'fonts', 'extras']);

}