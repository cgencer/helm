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

module.exports = function (config, gulp) {
	gulp.task('html', ['combine', 'styles', 'browserify'], function() {

        return gulp.src([
                config.paths.tmp.html, 
                config.paths.dist.html, 
                config.paths.dist.styles, 
                config.paths.dist.scripts
            ])
            .pipe(usemin({
                css: [ cleanCSS({keepSpecialComments: 0}), rev() ],
                html: [ htmlmin({
                    collapseWhitespace: true,
                    removeComments: true,
                }) ],
                js: [ uglify(), rev() ],
                inlinejs: [ uglify() ],
                inlinecss: [ minifyCss(), 'concat' ]
            }))
            .pipe(gulp.dest(config.paths.dist.root));
	});
}
