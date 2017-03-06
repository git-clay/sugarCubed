var gulp = require('gulp');
// var gutil = require('gulp-util');
// var bower = require('bower');
var concat = require('gulp-concat'); //concat files from common directory
var sass = require('gulp-sass'); //sass->css
var minifyCss = require('gulp-minify-css'); //minify css
var uglify = require('gulp-uglify');
var rename = require('gulp-rename'); // allows to rename file (.min.css)
// var sh = require('shelljs');

var paths = {
  sass: ['./scss/**/*.scss',
         './scss/*.scss'],
  js: [ './js/**/*.js']
};

gulp.task('sass', function(done) {
  gulp.src('./scss/sugar-cubed.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dist/css/'))
    .on('end', done);
});
gulp.task('scripts', function(done) {
  gulp.src(paths.js)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(rename( 'sugar-cubed.min.js' ))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js,['scripts'])
});

// gulp.task('install', ['git-check'], function() {
//   return bower.commands.install()
//     .on('log', function(data) {
//       gutil.log('bower', gutil.colors.cyan(data.id), data.message);
//     });
// });

// gulp.task('git-check', function(done) {
//   if (!sh.which('git')) {
//     console.log(
//       '  ' + gutil.colors.red('Git is not installed.'),
//       '\n  Git, the version control system, is required to download Ionic.',
//       '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
//       '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
//     );
//     process.exit(1);
//   }
//   done();
// });

gulp.task('default', ['sass','scripts','watch']);

