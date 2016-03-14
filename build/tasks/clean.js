var run = require('gulp-run');
var del = require('del');

module.exports = function (config, gulp) {
    gulp.task('clean', function(cb) {
        del([config.paths.dist.root, 
             config.paths.tmp.root], {
                cwd: config.paths.vendor    // this ensures that the bower_components dir doesn't get deleted.
        }).then(function (paths) {
            cb();
        });
    });
}