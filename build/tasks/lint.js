var jshint = require('gulp-jshint');
var argv = require('yargs').argv;

module.exports = function (config, gulp) {
    var files = argv.file && argv.file.split(' ')

    if (!files || files.length === 0) {
        files = config.src.js + '/**/*.js'
    }

    gulp.task('lint', function lint() {
        return gulp.src(files)
            .pipe(jshint(config.src.jshintrc))
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'))
    }
}
