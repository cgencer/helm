var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var size = require('gulp-size');

module.exports = function (config, gulp) {
    gulp.task('images', !config.paths.app.images ? function() {
        console.log('exiting images because no files');
        return;
    } : function() {
    	return gulp.src(config.sources.images)
    		.pipe(cache(imagemin({
    			optimizationLevel: 3,
    			progressive: true,
    			interlaced: true
    	})))
    	.pipe(gulp.dest(config.paths.dist.images))
    	.pipe(size());
    });
}