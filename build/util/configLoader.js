(function () {

    var fs = require('fs');
    var yaml = require('js-yaml');

    var doc = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'));
    doc.app.hosts.local += ':' + doc.app.hosts.port;

    doc.tasks.forEach(function(task) {
        console.dir(doc.app.hosts.port);
        require('../tasks/' + task)(doc.app);
    });

}());