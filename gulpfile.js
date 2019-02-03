const {
  src,
  dest,
  watch,
  series
} = require('gulp');
var del = require('del');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const clean = require('gulp-clean');
var sass = require('gulp-sass');
var gulp = require('gulp');
var open = require('gulp-open');
var connect = require('gulp-connect');
var ts = require('gulp-typescript');

sass.compiler = require('node-sass');

gulp.task('clean-scripts', function () {
  return gulp.src('output/**/*.js')
    .pipe(clean());
});

gulp.task('clean-styles', function () {
  return gulp.src('output/**/*.css')
    .pipe(clean());
});

gulp.task('sass:watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('script:watch', function () {
  gulp.watch('src/**/*.js', ['build-scripts']);
});

function cleanDist(done) {
  del(['output']);
  done();
}

gulp.task('build-typescript', function () {
  return gulp.src('src/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      outFile: 'main.js'
    }))
    .pipe(gulp.dest('output/scripts'));
});

gulp.task('build-scripts', gulp.series('build-typescript', function () {
  return gulp.src(['src/**/*.js'])
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('output/scripts/'))
    .pipe(rename({
      extname: '.min.js'
    }));
}));

gulp.task('build-styles', gulp.series('clean-styles', function () {
  return gulp.src(['src/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('output/styles/.css'));
}));

function copyIndex(done) {
  return gulp.src('src/index.html').pipe(gulp.dest('output', {
    overwrite: true
  }));
}

gulp.task('default', gulp.series(cleanDist, copyIndex, 'build-typescript'));