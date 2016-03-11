var bowerFiles  = require('main-bower-files');
var filter      = require('gulp-filter');
var flatten     = require('gulp-flatten');
var size        = require('gulp-size');
var changed     = require('gulp-changed');
var path        = require('path');
var browserSync = require('browser-sync')

module.exports = function (config, gulp) {
    if(!config.paths.app.fonts) return

    gulp.task('fonts', function() {
        return gulp.src(bowerFiles(/* options */), { base: config.paths.vendor })
            .pipe(filter(config.filters.fonts))
            .pipe(changed(config.paths.dist.fonts))
            .pipe(flatten())
            .pipe(gulp.dest(config.paths.dist.fonts))
            .pipe(browserSync.stream())
            .pipe(size());
    });
}
/*

var config      = require('../config')

var gulp        = require('gulp')

var paths = {
  src: path.join(config.root.src, config.tasks.fonts.src),      // , '/** / *'
  dest: path.join(config.root.dest, config.tasks.fonts.dest)
}

var fontsTask = function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('fonts', fontsTask)
module.exports = fontsTask
*/