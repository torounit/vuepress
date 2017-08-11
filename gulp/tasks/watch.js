'use strict';

// ==================================
//
// Load modules.
//
// ==================================

import config from '../config.js';
import gulp from 'gulp';
import watch from 'gulp-watch';



// ==================================
//
// watch.
//
// ==================================

gulp.task('setWatch', function () {
	global.isWatching = true;
});
