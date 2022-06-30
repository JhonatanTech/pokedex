const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return gulp.src('sass/vendor/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('sass/'))
}
exports.buildStyles = buildStyles
exports.watch = () => {
    gulp.watch('./sass/vendor/*.scss', buildStyles)
}