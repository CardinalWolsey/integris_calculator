var gulp = require('gulp');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');


gulp.task('static:dev', function() {
  gulp.src('app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/entry.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('sass:dev', function() {
  gulp.src('app/sass/application.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCss())
  .pipe(gulp.dest('build/'));
});

gulp.task('build:dev', ['webpack:dev', 'static:dev', 'sass:dev']);
gulp.task('default', ['build:dev']);
