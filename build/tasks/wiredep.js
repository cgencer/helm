var gulp = require('gulp');

// inject bower components
gulp.task('wiredep', function() {
	var wiredep = require('wiredep').stream;

	gulp.src(app.sources.wiredep)
	.pipe(wiredep({
//		cwd:        app.paths.html,
		bowerJson:  require(app.files.bower),
		directory:  app.paths.vendor
	}))
	.pipe(gulp.dest(app.paths.html));
});
