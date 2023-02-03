const { src, watch, dest } = require('gulp');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');

function css(done) {
    
    src('src/css/**/*.css')
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('build/css'))

    done();
}

function js(done) {
    
    src('src/js/**/*.js')
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('build/js'))

    done();
}

function dev(done) {

    watch('src/css/**/*.css', css)
    watch('src/js/**/*.js', js)

    done();
}

exports.dev = dev;