var gutil = require('gulp-util');
var filter = require('gulp-filter');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var size = require('gulp-size');
var gulpif = require('gulp-if');
var tap = require('gulp-tap');
var path = require('path');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var minifyCss = require('gulp-minify-css');

module.exports = function (config, gulp) {
	gulp.task('html', ['wiredep', 'styles', 'browserify'], function() {
		return gulp.src([
//                config.sources.wiredep,
                config.paths.tmp.scripts + config.filters.scripts, 
                config.paths.app.scripts + config.filters.scripts, 
                config.paths.tmp.styles + config.filters.styles, 
                config.paths.app.styles + config.filters.styles
            ])
			.pipe(useref({
//				cwd: config.paths.dist.root,
				searchPath: [
                    config.paths.vendor, 
                    config.paths.tmp.scripts, 
                    config.paths.app.scripts, 
                    config.paths.tmp.styles, 
                    config.paths.app.styles
                ]
			}))
			.pipe(gulpif(config.filters.scripts, uglify()))
			.pipe(gulpif(config.filters.styles, cleanCSS({debug: true}, function(details) {
                console.log(details.name + ': ' + details.stats.originalSize);
                console.log(details.name + ': ' + details.stats.minifiedSize);
            })))
            .pipe(tap(function (file, t) {
                gutil.log(file.path);
            }))
			.pipe(gulp.dest(config.paths.dist.root))
			.pipe(size())
	});
}