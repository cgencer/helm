var gutil = require('gulp-util');
var filter = require('gulp-filter');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var size = require('gulp-size');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-minify-css');

module.exports = function (config, gulp) {
	gulp.task('html', ['styles', 'browserify'], function() {
		var jsFilter = filter(config.filters.scripts);
		var cssFilter = filter(config.filters.styles);

		return gulp.src(config.sources.wiredep)
			.pipe(gulpif('*.js', uglify()))
			.pipe(gulpif('*.css', minifyCss()))
			.pipe(useref())
			.pipe(gulp.dest('dist'))
			.pipe(size())
	});
}