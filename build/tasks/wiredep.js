var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var gulpif = require('gulp-if');

// reads html files from .tmp
// writes to .tmp
module.exports = function (config, gulp) {
    // inject bower components
    gulp.task('wiredep', ['lessimport', 'includes'], function() {
    	return gulp.src([config.paths.tmp.html])
            // inject the scripts
            .pipe(wiredep({
                cwd:        config.paths.dist.root,
                bowerJson:  require(config.files.bower),
                directory:  config.paths.vendor,
                onError: function(err) {
                    console.log('err: '+err);
                }
            }))
            .pipe(gulp.dest(config.paths.tmp.root));
    });
}