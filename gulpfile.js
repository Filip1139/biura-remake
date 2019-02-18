const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
// Compile Sass & Inject Into Browser
gulp.task('sass', function () {
    return gulp.src(['src/scss/style.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});
// Watch Sass & Serve
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./src"
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(["src/js/*.js"], ['scripts']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/*.js").on('change', browserSync.reload);
});
gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('src'));
});
// Default Task
gulp.task('default', ['serve']);