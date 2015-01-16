var gulp        =   require('gulp'),
    connect     =   require('gulp-connect'),
    concat      =   require('gulp-concat'),
    sourcemaps  =   require('gulp-sourcemaps'),
    sass        =   require('gulp-sass');
 
gulp.task('webserver', function() {
 connect.server({
    livereload: true
  });
});

gulp.task('watch', function() {
    gulp.watch('scripts/*.js', ['scripts']);
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('index.html', ['reload']);
});

gulp.task('scripts', function() {
  gulp.src('scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('WellDemo.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('bin'))
    .pipe(connect.reload());
});

gulp.task('reload', function() {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src('sass/main.scss')
    .pipe(sass({
      // includePaths: require('node-bourbon').with('other/path', 'another/path')
      // - or -
      includePaths: require('node-bourbon').includePaths
    }))
    .pipe(gulp.dest('bin'))
    .pipe(connect.reload());
});

gulp.task('default', ['scripts', 'sass', 'webserver', 'watch']);