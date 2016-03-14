var wiredep = require('wiredep').stream;

module.exports = function (config, gulp) {

    // inject bower components
    gulp.task('wiredep', function() {

    	gulp.src(config.sources.wiredep)
    	.pipe(wiredep({
    		cwd:        config.paths.dist.root,
    		bowerJson:  require(config.files.bower),
    		directory:  config.paths.vendor,
            onError: function(err) {
                console.log('err: '+err);
            },
            onPathInjected: function(fileObject) {
                console.log('updated: '+fileObject.file);
            }
    	}))
    	.pipe(gulp.dest(config.paths.tmp.root));
    });
}