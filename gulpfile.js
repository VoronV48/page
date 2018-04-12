var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');


/*------------server-------------*/

gulp.task('server', function() {
    browserSync.init({
        server: {
        	port: 9000,
            baseDir: "build"
        }
    });


    gulp.watch('build/**/*').on('change', browserSync.reload);
});

/*-----------Pug complete----------------------*/ 

gulp.task('templates:compile', function buildHTML() {
  return gulp.src('source/template/index.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build'))
});
/*-------style compite----------*/ 

gulp.task('sass', function () {
    return gulp.src('source/styles/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('.build/css'));
});
/*------------sprites----------*/

gulp.task('sprite', function (cb) {
    var spriteData = gulp.src('source/images/icons/*.png').pipe(spritesmith({
      imgName: 'sprite.png',
      imgPath: '..images/sprite.png',
      cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('path/to/output/'));
    spriteData.img.pipe(gulp.dest('build/images/'))
  });
