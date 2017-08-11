import gulp from 'gulp';
import './gulp/tasks/browserify';
import './gulp/tasks/server';
import './gulp/tasks/watch';
import './gulp/tasks/dist';
import './gulp/tasks/release';

gulp.task('build', ['browserify']);
gulp.task('default', ['setWatch', 'build', 'browserSync']);

