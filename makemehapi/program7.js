var Hapi = require('hapi');
var Vision = require('vision');
var Path = require('path');

var server = new Hapi.Server();

server.register(Vision, function (err) {
    if (err) throw err;
});

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates'),
    helpersPath: Path.join(__dirname, 'helpers')

});

server.route({
    path: '/',
    method: 'GET',
    handler: { view: 'index2.html' }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
