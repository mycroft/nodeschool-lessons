
var net = require('net');

var server = net.createServer(function (socket) {
    function z(s) {
        if (s < 10) { return '0' + s; }
        return s;
    }
    
    var now = new Date();
    var now_str = now.getFullYear() + "-" + 
        z(now.getMonth() + 1) + "-" +
        z(now.getDate()) + " " +
        z(now.getHours()) + ":" +
        z(now.getMinutes()) + "\n";

    socket.end(now_str);
});

server.listen(process.argv[2]);

