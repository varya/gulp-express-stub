var gulp = require('gulp');
 
var server = require('gulp-express');
 
var options = require('./config');
 
// Shortcats
var sourcePath = options.sourcePath;
var outputPath = options.outputPath;
var appPath = options.appPath;
 
gulp.task('build:app', [
    'build:html'
    // TODO: Add tasks about CSS and JS
    ]);
 
gulp.task('build:html', function() {
    // Copy HTML
    return gulp.src(sourcePath + '/**/*.html')
        .pipe(gulp.dest(outputPath));
 
});
 
gulp.task('serve', ['build:app'], function() {
    server.run([
        appPath
    ]);
 
    gulp.watch(sourcePath + '**/*.html', ['build:html']);
 
    // liveReload when changes appear
    // TODO: can be more specific in the future
    gulp.watch(outputPath + '/**', server.notify);
});
 
gulp.task('default', ['serve']);
