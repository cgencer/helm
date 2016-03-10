(function() {

	var fs = require('fs');
	var yaml = require('gulp-yaml');
	var onlyScripts = require('./util/scriptFilter');
	var tasks = fs.readdirSync('./build/tasks/').filter(onlyScripts);

	console.dir(tasks);

	var app = {
		hosts: {
			port: 			9000,
			local: 			'http://localhost'
		},
		files: {
			npm:			'../package.json',
			bower: 			'../bower.json',
			test: 			'../test/index.js'
		},
		paths: {
			vendor: 		'../dist/js/vendor/',
			html: 			'../dist/',
			data: 			'../app/data/',
			fonts: 			'../app/fonts/',
			scripts: 		'../app/scripts/',
			styles: 		'../app/styles/',
			data: 			'../app/data',
			less: 			['app/styles/includes', 'app/bower_components/bootstrap/less'],
			tmpStyles: 		'.tmp/styles',
			dest: {
				root: 			'../dist/',
				images: 		'../dist/images/',
				fonts: 			'../dist/fonts'
			},
			search: 		'{.tmp,app}'
		},
		sources: {
			wiredep: 		'app/*.html',
			watch: 			[
								'app/*.html',
								'.tmp/styles/**/*.css',
								'{.tmp,app}/scripts/**/*.js',
								'app/images/**/*'
			],
			styles: 		'app/styles/**/*.less',
			coffeeScr: 		'app/scripts/**/*.coffee',
			images: 		'app/images/**/*',
			less: 			'app/styles/main.less',
			extras: 		[
								'app/*.*',
								'!app/*.html'
			]
		},
		filters: {
			scripts: 		'**/*.js',
			styles: 		'**/*.css',
			fonts: 			'**/*.{eot,svg,ttf,woff}'
		}
	}

	app.hosts.local += ':' + app.hosts.port;
	tasks.forEach(function(task) {
		require('./tasks/' + task);
	});

}());