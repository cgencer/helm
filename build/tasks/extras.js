var gulp = require('gulp');

gulp.task('extras', function() {
    return gulp.src(app.sources.extras, {
        dot: true
    })
    .pipe(gulp.dest(app.paths.dest.root));
});
