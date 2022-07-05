const { parallel } = require('gulp');
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
var csso = require('gulp-csso');

function buildStyles() {
    return gulp.src('sass/vendor/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('sass/'))
}
exports.buildStyles = buildStyles

function watch() {
    gulp.watch('./sass/vendor/*.scss', buildStyles)
}
exports.watch = watch

exports.default = parallel(watch)