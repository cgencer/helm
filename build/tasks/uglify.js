var uglify = require('gulp-uglify');

module.exports = function (config, gulp) {
	gulp.task('uglify', function() {
		return gulp.src([config.src.js + '/**/*.js'])
			.pipe(uglify({
				output: {
					ascii_only:true
				},
				compress: {
					drop_console:true
				}
			}))
			.pipe(gulp.dest(config.dist.js))
	}
}