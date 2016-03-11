var livereload = require('gulp-livereload');

module.exports = function (config, gulp) {
	// Determine watchify/browserify
	gulp.task('setWatch', function() {
		global.isWatching = true;
	});

	gulp.task('watch', ['setWatch','connect', 'serve'], function() {
		var server = livereload();

		// watch for changes
		gulp.watch(config.sources.watch)
		.on('change', function(file) {
			server.changed(file.path);
		});

		gulp.watch(config.sources.styles, ['styles']);
		gulp.watch(config.sources.coffeeScr, ['browserify']);
		gulp.watch(config.sources.images, ['images']);
		gulp.watch(config.files.bower, ['wiredep']);
	});
}