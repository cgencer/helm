var gulp = require('gulp');
var fs = require('fs');
var yaml = require('js-yaml');

(function() {
    var doc = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'));
    doc.app.hosts.local += ':' + doc.app.hosts.port;

    doc.tasks.forEach(function(task) {
        require('../tasks/' + task)(doc.app, gulp);
    });
}());