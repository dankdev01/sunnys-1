var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

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

gulp.task('mini-js', function() {
    return gulp.src('public/assets/javascript/*.js')
        .pipe(concat('scripts.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});
