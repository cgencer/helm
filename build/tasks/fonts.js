var bowerFiles  = require('main-bower-files');
var filter      = require('gulp-filter');
var flatten     = require('gulp-flatten');
var size        = require('gulp-size');
var changed     = require('gulp-changed');
var path        = require('path');
var browserSync = require('browser-sync')

module.exports = function (config, gulp) {
    gulp.task('fonts', (config.options.fonts && config.paths.app.fonts) ? function() {
        return gulp.src(bowerFiles(/* options */), { base: config.paths.vendor })
            .pipe(filter(config.filters.fonts))
            .pipe(changed(config.paths.dist.fonts))
            .pipe(flatten())
            .pipe(gulp.dest(config.paths.dist.fonts))
            .pipe(browserSync.stream())
            .pipe(size());
    } : function() {
        console.log('exiting fonts because no files');
        return;
    });
}
