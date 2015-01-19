var gulp        =   require('gulp');
var connect     =   require('gulp-connect');
var concat      =   require('gulp-concat');
var sourcemaps  =   require('gulp-sourcemaps');
var sass        =   require('gulp-sass');
var handlebars  =   require('gulp-handlebars');
var wrap        =   require('gulp-wrap');
var declare     =   require('gulp-declare');
var merge       =   require('merge-stream');
var path        =   require('path');
var uglify      =   require('gulp-uglify');

gulp.task('templates', function() {

    var partials = gulp.src(['templates/_*.hbs'])
        .pipe(handlebars())
        .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
            imports: {
                processPartialName: function(fileName) {
                    // Strip the extension and the underscore
                    // Escape the output with JSON.stringify
                    return JSON.stringify(path.basename(fileName, '.js').substr(1));
                }
            }
        }));

    var templates = gulp.src('templates/[^_]*.hbs')
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'Test.templates',
            noRedeclare: true // Avoid duplicate declarations
        }));

    // Output both the partials and the templates as build/js/templates.js
    return merge(partials, templates)
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('bin'));
});

gulp.task('webserver', function() {
 connect.server({
    livereload: true
  });
});

gulp.task('watch', function() {
    gulp.watch('scripts/*.js', ['scripts']);
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('templates/*.hbs', ['templates']);
    gulp.watch('index.html', ['reload']);
});

gulp.task('scripts', function() {
  gulp.src('scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('WellDemo.js'))
    .pipe(uglify())
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
    .pipe(sass())
    .pipe(gulp.dest('bin'))
    .pipe(connect.reload());
});

gulp.task('default', ['templates', 'scripts', 'sass', 'webserver', 'watch']);