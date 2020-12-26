'use strict';

const { src, watch, dest, parallel, series } = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const webserver = require("gulp-webserver");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require('gulp-uglify');

function localServer() {
    return src("./dist").pipe(
        webserver({
            livereload: true,
            directoryListing: false,
            open: true
        })
    );
}

function css() {
    return src("./src/scss/styles.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss())
        .pipe(sourcemaps.write("./"))
        .pipe(dest("./dist"));
}

function js() {
    return src('./src/scripts/index.js')
        .pipe(uglify())
        .pipe(dest('./dist'));
}

function html() {
    return src('./index.html')
        .pipe(dest('./dist'));
}

function assets() {
    return src('./src/assets/**/*')
        .pipe(dest('./dist/assets'))
}

exports.dev = function() {
    localServer();
    html();
    css();
    js();
    assets();
    watch("./src/scss/**/*.scss", css);
    watch("./src/scripts/**/*.js", js);
    watch("./index.html", html);
};

exports.build = function(done) {
    html();
    css();
    js();
    assets();
    done();
};