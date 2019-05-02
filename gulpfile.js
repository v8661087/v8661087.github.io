var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename      = require("gulp-rename");

//定义css任务
gulp.task('css', function(){
  //定义postcss任务流数组
  var processors = [
    autoprefixer({
      browsers:['last 5 version'],
      cascade: false,
      remove: false
    }),
  ];
  return gulp.src('./src/*.css')
             .pipe(postcss(processors))
             .pipe(minifyCSS())
             .pipe(rename(function(path) {
              path.basename += ".min";
              path.extname = ".css";
            }))
             .pipe(gulp.dest('./dist'));
});
