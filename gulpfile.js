const gulp = require('gulp');
const i18n = require('gulp-html-i18n');

gulp.task('default', function() {
  const dest  = './';
  const index = './src/resume.html';

  return gulp.src(index)
    .pipe(i18n({
      langDir: './lang',
      trace: true,
      defaultLang: 'en-US',
    }))
    .pipe(gulp.dest(dest));
});
