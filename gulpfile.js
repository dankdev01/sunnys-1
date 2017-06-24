var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');

gulp.task('sass', function() {
    return gulp.src('public/assets/css/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('public/assets/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('public/assets/css/scss/*.scss', ['sass']);
});

gulp.task('js', function() {
    return gulp.src(['public/assets/javascript/*.js', 'server.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
