/**
 * Created by alejandrojovermorales on 28/03/15.
 */
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();


require('./gulp_tasks/scripts')(gulp, plugins);


gulp.task('default', ['webpack:serve']);

// ***** GULP tasks
//gulp.task('default', ['webserver', 'compass', 'open', 'watchify', 'watch']);