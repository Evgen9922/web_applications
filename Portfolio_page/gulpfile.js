const {src, dest, series, watch} = require('gulp');

const concat = require('gulp-concat');
const htmlMIN = require('gulp-htmlmin');
const sasstoCSS = require('gulp-sass')(require('sass'));
const cssCleaner = require('gulp-clean-css');
const autoPrefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const image = require('gulp-image');
const uglify = require('gulp-uglify-es').default;
const notify = require ('gulp-notify');
const babel = require('gulp-babel');
const clear = require('del');
const sourcemap = require('gulp-sourcemaps');


const clearTasks = () =>{
  return (
    clear(['dist'])
  )
}

const compilSASS = ()=>{
  return(
    src('src/styles/main_style.scss')
    .pipe (sourcemap.init())
    .pipe(sasstoCSS().on('error', sasstoCSS.logError))
    // .pipe(concat('main.css'))
    .pipe(autoPrefixer({
      cascade: false
      }))
    .pipe(cssCleaner({
        level:2
      }))
    .pipe(sourcemap.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
  )
}

const htmlMinify = ()=>{
  return(
    src('src/**/*.html')
    .pipe(sourcemap.init())
    .pipe(htmlMIN({
      collapseWhitespace: true
    }))
    .pipe(sourcemap.write())
    .pipe (dest('dist'))
    .pipe(browserSync.stream())
  )
}

const img_files = ()=>{
  return(
    src([
    'src/imgs/**/*.jpg',
    'src/imgs/**/*.png',
    'src/imgs/**/*.webp',
    ])
    .pipe(image())
    .pipe(dest('dist/imgs'))
  )
}

const scripts = () =>{
  return(
    src([
    'src/js/*.js'
    ])
    .pipe(sourcemap.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(sourcemap.write())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream()) 
  )}

 
const addFonts = ()=>{
  return (
    src('src/fonts/**')
    .pipe(dest('dist/fonts'))
  )
}  

const whatchFile = () =>{
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('src/**/*.html', htmlMinify);
watch('src/styles/*.scss', compilSASS);
// watch('src/styles/**/*.css', styles);
watch('src/js/*.js', scripts);
watch('src/fonts/**', addFonts);
watch('src/imgs/**', img_files);

exports.default = series (
  clearTasks,
  htmlMinify, 
  compilSASS, 
  // styles, 
  img_files, 
  scripts, 
  addFonts,
  whatchFile
  );