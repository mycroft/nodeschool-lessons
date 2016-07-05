
var split = require('split');
var through2 = require('through2');

var n = 0;

function write(buffer, encoding, next) {
	if (n % 2 == 1) {
    	this.push(buffer.toString().toUpperCase() + "\n");
	} else {
    	this.push(buffer.toString().toLowerCase() + "\n");
	}

    next();

	n ++;
}

process.stdin
    .pipe(split())
    .pipe(through2(write, function() {}))
    .pipe(process.stdout);


/*
var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
;

*/
