module.exports = function (config, gulp) {

    // inject bower components
    gulp.task('wiredep', function() {
    	var wiredep = require('wiredep').stream;

    	gulp.src(config.sources.wiredep)
    	.pipe(wiredep({
    //		cwd:        config.paths.root,
    		bowerJson:  require(config.files.bower),
    		directory:  config.paths.vendor
    	}))
    	.pipe(gulp.dest(config.paths.root));
    });
}