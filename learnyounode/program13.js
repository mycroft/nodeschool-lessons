var http = require('http');
var url = require('url');

function getTimeArray(date) {
	return {
		'hour': date.getHours(),
		'minute': date.getMinutes(),
		'second': date.getSeconds()
	};
}

function getUnixTimeArray(date) {
	return {
		'unixtime': date.getTime()
	};
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
	var result = null;

	if (/\/api\/parsetime/.test(req.url)) {
		result = getTimeArray(time);

	} else if (/\/api\/unixtime/.test(req.url)) {
		result = getUnixTimeArray(time);
	}

	if (null != result) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(result));
	}

});

server.listen(process.argv[2]);

/*
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))

*/
