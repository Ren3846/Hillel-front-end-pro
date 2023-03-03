const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));

const SRC_DIR = './src';
const DIST_DIR = './dist';

gulp.task('sass', function () {
  return gulp
    .src(SRC_DIR + '/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(DIST_DIR + '/css'));
});

gulp.task('scripts', function () {
  return gulp
    .src(SRC_DIR + '/**/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest(DIST_DIR + '/js'));
});

// gulp.task('less', function () {
//   return gulp.src('./src/less/**/*.less').pipe(less()).pipe(gulp.dest('./dist/css'));
// });

// gulp.task('minify-css', function () {
//   return gulp.src('dist/css/**/*.css').pipe(cleanCSS()).pipe(gulp.dest('./dist/css'));
// });

gulp.task('build', gulp.series('sass', 'scripts'));
