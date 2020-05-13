const {src, dest, task, series, watch, parallel} = require("gulp");
const rm = require( "gulp-rm" );
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const gulpif = require('gulp-if');

const env = process.env.NODE_ENV;

const {SRC_PATH, DIST_PATH, STYLES_LIBS, JS_LIBS} = require('./gulp.config')

sass.compiler = require("node-sass");

task( "clean", () => {
  return src( `${DIST_PATH}/**/*`, { read: false }).pipe( rm() )
})

task( 
  "copy:html", () => {
    return src(`${SRC_PATH}/*.html`).pipe(dest(`${DIST_PATH}`)).pipe(reload({stream:true}));
});

/*const styles = [
  'node_modules/normalize.css/normalize.css',
  'src/styles/settings/vars.scss',
  'src/styles/settings/mixins.scss',
  'src/styles/main.scss'
]*/

task("styles", () => {
    return src(['src/styles/main.scss'])
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('main.min.scss'))
    .pipe(sassGlob())
    .pipe(sass().on("error", sass.logError))
    //.pipe(px2rem())
    .pipe(gulpif(env === 'dev', 
      autoprefixer({
        cascade: false
      })
    ))
    .pipe(gulpif(env === 'prod', gcmq()))
    .pipe(gulpif(env === 'prod', cleanCSS({compatibility: 'ie8'})))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest(`${DIST_PATH}/styles`))
    .pipe(reload({stream:true}));
});

/*const jsLibs = [
  "node_modules/jquery/dist/jquery.js",
  "src/js/*.js"
]*/

task( 
  "scripts", () => {
    return src([
      ...JS_LIBS
    ])
    .pipe(gulpif(env === 'prod',sourcemaps.init()))
    .pipe(concat('main.min.js', {newLine: ";"}))
    .pipe(gulpif(env === 'prod', babel({
      presets: ['@babel/env']
    })))
    .pipe(gulpif(env === 'prod', uglify()))
    .pipe(gulpif(env === 'prod', sourcemaps.write()))
    .pipe(dest(`${DIST_PATH}/js`))
    .pipe(reload({stream:true}));
});

task( 
  "icons", () => {
    return src(`${SRC_PATH}/icons/*.svg`)
    .pipe(svgo({
      removeAttrs: {
        attrs: "(fill|stroke|style|width|height|data)"
      }
    }))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "../sprite.svg"
        }
      }
    }))
    .pipe(dest(`${DIST_PATH}/icons/`))
});

task(
  "fonts", () => {
    return src(`${SRC_PATH}/fonts/*`)
    .pipe(dest(`${DIST_PATH}/fonts/`))
  }
)

task(
  "img", () => {
    return src(`${SRC_PATH}/img/**/*`)
    .pipe(dest(`${DIST_PATH}/img/`))
  }
)

task(
  "copySvg", () => {
    return src(`${SRC_PATH}/icons/single/*`)
    .pipe(dest(`${DIST_PATH}/icons/`))
  }
)

task(
  "video", () => {
    return src(`${SRC_PATH}/burger_video.mp4`)
    .pipe(dest(`${DIST_PATH}/`))
  }
)

task(
  "server", () => {
  browserSync.init({
      server: {
          baseDir: `./${DIST_PATH}`
      }, 
      open:false
  });
});


task(
  "watch", () => {
  watch(`./${SRC_PATH}/styles/**/*.scss`, series('styles'));
  watch(`./${SRC_PATH}/*.html`, series('copy:html'));
  watch(`./${SRC_PATH}/js/*.js`, series("scripts"));
  watch(`./${SRC_PATH}/icons/*.svg`, series("icons"));
  watch(`./${SRC_PATH}/fonts/*`, series("fonts"));
  watch(`./${SRC_PATH}/img/*`, series("img"));
  watch(`./${SRC_PATH}/icons/*`, series("copySvg"));
  watch(`./${SRC_PATH}/burger_video.mp4`, series("video"));
})

task(
  "default", 
  series("clean", 
  parallel("copy:html", "styles", "scripts", "icons", "fonts", "img", "copySvg", "video"), 
  parallel("server", "watch"))
);

task("build", 
  series("clean", 
  parallel("copy:html", "styles", "scripts", "icons", "fonts", "img", "copySvg", "video"))
);