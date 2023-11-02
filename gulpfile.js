const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const archiver = require('gulp-archiver');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass:debug', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:production', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('archive', function () {
    return gulp.src('./')
        .pipe(archiver('archive.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('build', gulp.series('sass:production', 'archive'));

