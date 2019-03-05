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
  './src/app/header/index.html',
  './src/app/block1/index.html',
  './src/app/block2/index.html',
  './src/app/footer/index.html',
  './src/app/base/end.html',
]

const cssFiles = [
  './node_modules/normalize.css/normalize.css',
  './src/app/base/*.css',
  './src/app/**/xs.css',
  './src/app/**/sm.css',
  './src/app/**/md.css',
  './src/app/**/lg.css',
  './src/app/**/xl.css',
  './src/app/**/*.css',
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

function images() {
  return gulp.src('./src/images/*.*')
    .pipe(gulp.dest('./dist/images'));
}

function fonts() {
  return gulp.src('./src/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    tunnel: true
  });

  gulp.watch('./src/app/**/*.html', html) .on('change', browserSync.reload);
    gulp.watch('./src/app/**/*.css', styles) .on('change', browserSync.reload);
  gulp.watch('./src/app/**/*.js', scripts) .on('change', browserSync.reload);
  gulp.watch('./src/images/*.*', images) .on('change', browserSync.reload);
  gulp.watch('./src/fonts/*.*', fonts) .on('change', browserSync.reload);
    gulp.watch('./src/**/*.*') .on('change', browserSync.reload);

}

function clean() {
  return del(['dist/*'])
}

exports.watch = watch;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
exports.build = series(clean, parallel(html, styles, scripts, images, fonts));
