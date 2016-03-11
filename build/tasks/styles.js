var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var size = require('gulp-size');

module.exports = function (config, gulp) {
    gulp.task('styles', function () {
        return gulp.src(config.files.styLess)
            // .pipe(sourcemaps.init())
            .pipe(less({
                paths: config.paths.less
            }))
            // .pipe(sourcemaps.write())
            .pipe(autoprefixer('last 1 version'))
            .pipe(gulp.dest(config.paths.tmp.styles))
            .pipe(size());
    });
}