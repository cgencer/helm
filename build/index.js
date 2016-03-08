(function() {

	var fs = require('fs');
	var onlyScripts = require('./util/scriptFilter');
	var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

	var files = {
		npm:			'../package.json',
		bower: 			'../bower.json',
		test: 			'../test/index.js'
	};
	var paths = {
		vendor: 		'../dist/js/vendor/',
		data: 			'../app/data/',
		fonts: 			'../app/fonts/',
		scripts: 		'../app/scripts/',
		styles: 		'../app/styles/',
		data: 			'../app/data',

	};

	tasks.forEach(function(task) {
		require('./tasks/' + task);
	});

}());