var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

function helloWorldHandler(request, reply) {
    reply("Hello hapi");
}

function nameHandler(request, reply) {
    reply('Hello ' + request.params.name);
}

server.route({
    path: '/',
    method: 'GET',
    handler: helloWorldHandler,
});

server.route({
    path: '/{name}',
    method: 'GET',
    handler: nameHandler,
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
