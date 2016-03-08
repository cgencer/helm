var gulp = require('gulp');
var livereload = require('gulp-livereload');

// Determine watchify/browserify
gulp.task('setWatch', function() {
	global.isWatching = true;
});

gulp.task('watch', ['setWatch','connect', 'serve'], function() {
	var server = livereload();

	// watch for changes
	gulp.watch(app.sources.watch)
	.on('change', function(file) {
		server.changed(file.path);
	});

	gulp.watch(app.sources.styles, ['styles']);
	gulp.watch(app.sources.coffeeScr, ['browserify']);
	gulp.watch(app.sources.images, ['images']);
	gulp.watch(app.files.bower, ['wiredep']);
});
