import gulp from 'gulp';
import './gulp/tasks/browserify';
import './gulp/tasks/server';
import './gulp/tasks/watch';

gulp.task('build', ['browserify']);
gulp.task('default', ['setWatch', 'build', 'browserSync']);

