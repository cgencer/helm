var inject = require('gulp-inject');
var gulpif = require('gulp-if');
var less = require('gulp-less');

// uses less files
// writes to .tmp
module.exports = function (config, gulp) {
    gulp.task('lessimport', function() {
        var scriptSet = [];
        for(var i in config.options.less) {
            scriptSet.push( config.files[ config.options.less[i] ] );
        }
        // copies the css files to tmp as well
        gulp.src([config.paths.app.styles + '*.css'])
            .pipe(gulp.dest(config.paths.tmp.styles))

        return gulp.src(config.files.lessBoot)      // './app/styles/boot.less'
            /* Dynamically injects @import statements into the main .less file */
            .pipe(gulpif(
                // the condition
                ((config.options.styling == 'less') && (scriptSet.length > 0)), 
                // it won't hurt... here comes the the injection...
                inject(
                    // source-stream options
                    gulp.src(scriptSet, {
                        read: false, 
                        cwd: config.paths.vendor
                    }
                ), {
                    // inject options
                    starttag:   '/* inject:less */',
                    endtag:     '/* endinject */',
                    transform: function (filepath) {
                        return '@import "../../app/vendor' + filepath + '";';
                    }
                })
            ))
            .pipe(less())
            .pipe(gulp.dest(config.paths.tmp.styles));
    });
}