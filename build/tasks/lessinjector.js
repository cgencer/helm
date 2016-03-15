var inject = require('gulp-inject');
var gulpif = require('gulp-if');
var less = require('gulp-less');

module.exports = function (config, gulp) {
    gulp.task('lessinject', function() {

        return gulp.src(config.files.lessBoot)
            /**
            * Dynamically injects @import statements into the main app.less file, allowing
            * .less files to be placed around the app structure with the component
            * or page they apply to.
            */
            .pipe(gulpif((config.options.less.indexOf('preboot') != -1), 
                inject(gulp.src([config.files.preboot], {
                    read: false, 
                    cwd: config.paths.tmp.styles
                }), {
                    starttag:   '/* inject:less */',
                    endtag:     '/* endinject */',
                    transform: function (filepath) {
                        return '@import ".' + filepath + '";';
                    }
                })
            ))
            .pipe(less())
            .pipe(gulp.dest(config.paths.tmp.styles));
    });
}