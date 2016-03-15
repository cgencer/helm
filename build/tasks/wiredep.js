var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var gulpif = require('gulp-if');

module.exports = function (config, gulp) {

    // inject bower components
    gulp.task('wiredep', function() {

    	gulp.src(config.sources.wiredep)
            // inject the scripts
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
            // this injects the icons partial into the head
            .pipe(inject(gulp.src([config.files.icons]), {
                starttag: '<!-- inject:head:{{ext}} -->',
                transform: function (filePath, file) {
                    // return file contents as string
                    return file.contents.toString('utf8')
                }
            }))
            .pipe(gulp.dest(config.paths.tmp.root));
    });
}