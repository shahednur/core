var
	config = require('../config'),
	gulp = require('gulp'),
	paths = require('../utils/paths'),

	browserSync = require('browser-sync'),

	task = function() {
		var options = config.tasks.watch.browserSync;

		config.tasks.watch.tasks.forEach(function(name) {
			options.files.push(paths(name).dest);
		});

		browserSync.init(options);

		config.tasks.watch.tasks.forEach(function(name) {
			gulp.watch(paths(name).src, gulp.parallel(name));
		});
	};

gulp.task('watch', task);
module.exports = task;
