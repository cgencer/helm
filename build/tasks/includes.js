var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var gulpif = require('gulp-if');

// reads html files
// writes to .tmp
module.exports = function (config, gulp) {
    // inject bower components
    gulp.task('includes', function() {
        return gulp.src([config.sources.allHtml])
            // this injects the icons partial into the head
            .pipe(gulpif(config.options.icons,
                inject(gulp.src([config.files.icons]), {
                    starttag: '<!-- inject:head:{{ext}} -->',
                    transform: function (filePath, file) {
                        // return file contents as string
                        return file.contents.toString('utf8')
                    }
                }))
            )
            // inject the footer as well
            .pipe(gulpif(config.options.footer,
                inject(gulp.src([config.files.footer]), {
                    starttag: '<!-- inject:foot:{{ext}} -->',
                    transform: function (filePath, file) {
                        // return file contents as string
                        return file.contents.toString('utf8')
                    }
                }))
            )
            .pipe(gulp.dest(config.paths.tmp.root));
    });
}