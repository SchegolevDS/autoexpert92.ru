const gulp = require('gulp');
const { series } = require('gulp');
const { parallel } = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();

const htmlFiles = [
  './src/app/base/head.html',
  './src/app/base/end.html',
  './src/app/header/header.html',
  './src/app/content/content.html',
  './src/app/footer/footer.html'
]

const cssFiles = [
  './node_modules/normalize.css/normalize.css',
  './src/app/base/style.css',
  './src/app/base/responsive.css'
];

const jsFiles = [
  './src/app/base/main.js'
]

function html() {
  return gulp.src(htmlFiles)
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist'));
}

function styles() {
  return gulp.src(cssFiles)
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
      browsers: ['> 0.1%'],
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('./dist/css'));
}

function scripts() {
  return gulp.src(jsFiles)
    .pipe(concat('main.js'))
    .pipe(uglify({
      toplevel: true
    }))
    .pipe(gulp.dest('./dist/js'));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    tunnel: true
  });
  gulp.watch('./src/html/**/*.html', html).on('change', browserSync.reload);
  gulp.watch('./src/css/**/*.css', styles).on('change', browserSync.reload);
  gulp.watch('./src/js/**/*.js', scripts).on('change', browserSync.reload);
}

function clean() {
  return del(['dist/*'])
}

exports.watch = watch;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.build = series(clean, parallel(html, styles, scripts));
