const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const connect = require("gulp-connect");
const jsmin = require("gulp-jsmin");

const appPath = {
    scss: './app/scss/**/*.scss',
    pug: './app/index.pug',
    img: './app/images/**/*.*',
    js:'./app/js/*.js'
};
const destPath = {
    css: './css',
    html: './',
    images:'./images',
    js:'./js/'
};

const jsPath=[
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './app/js/index.js'
]

function buildHtml() {
    return src(appPath.pug)
        .pipe(pug())
        .pipe(dest(destPath.html))
        .pipe(connect.reload())
};

function buildStyles() {
    return src(appPath.scss)
        .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
        .pipe(dest(destPath.css))
        .pipe(connect.reload())
};
function imageMin() {
    return src(appPath.img)
        .pipe(imagemin())
        .pipe(dest(destPath.images))
        .pipe(connect.reload())
};
function jsMin(){
    return src(jsPath)
        .pipe(jsmin())
        .pipe(dest(destPath.js))
        .pipe(connect.reload());
}

function server(){
    connect.server({
        name:'Dev App',
        root:'dest',
        port:8080,
        livereload: true
    })
}



function watchCode() {
    watch(appPath.scss, buildStyles);
    watch(appPath.pug, buildHtml);
    watch(appPath.img, imageMin);
    watch(appPath.js, jsMin);
}

exports.default = series(buildStyles, buildHtml,imageMin, jsMin, parallel(server,watchCode))