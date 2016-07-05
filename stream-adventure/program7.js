var http = require('http');
var fs = require('fs');
var through2 = require('through2');

var server = http.createServer(function (req, res) {
    function write(buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase());
        next();
    }

    req.pipe(through2(write)).pipe(res);
});

server.listen(process.argv[2]);

/*
  var http = require('http');
  var through = require('through2');
  
  var server = http.createServer(function (req, res) {
      if (req.method === 'POST') {
          req.pipe(through(function (buf, _, next) {
              this.push(buf.toString().toUpperCase());
              next();
          })).pipe(res);
      }
      else res.end('send me a POST\n');
  });
  server.listen(parseInt(process.argv[2]));

*/
