var gulp    = require('gulp'), 
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {

    browserSync.init({
        server: "app",
        port: 1501
    });

    gulp.watch("app/css/*.css").on('change', browserSync.reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);