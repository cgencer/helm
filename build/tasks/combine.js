var gutil = require('gulp-util');
var filter = require('gulp-filter');
var useref = require('gulp-useref');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var size = require('gulp-size');
var gulpif = require('gulp-if');
var rev = require('gulp-rev');
var tap = require('gulp-tap');
var path = require('path');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var minifyCss = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var runSeq = require('run-sequence');

module.exports = function (config, gulp) {

    gulp.task('combine', ['wiredep', /*, 'styles', 'browserify'*/], function() {

        return gulp.src([
//                config.paths.tmp.root,
                config.paths.tmp.scripts + config.filters.scripts, 
                config.paths.tmp.styles + config.filters.styles, 
            ])
            .pipe(useref({
                cwd: config.paths.dist.root,
                searchPath: [
                    config.paths.vendor, 
                    config.paths.tmp.scripts, 
                    config.paths.tmp.styles, 
                ]
            }))
            .pipe(gulpif(config.filters.styles, concat('styles/app.css')))           
            .pipe(gulpif(config.filters.scripts, concat('scripts/app.js')))
            .pipe(gulpif(config.filters.styles, cleanCSS({debug: true})))
            .pipe(tap(function (file, t) {
                gutil.log(file.path);
            }))
            .pipe(gulp.dest(config.paths.dist.root))
            .pipe(size())
    });
}
