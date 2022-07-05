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
exports.watch = () => {
    gulp.watch('./sass/vendor/*.scss', buildStyles)
}