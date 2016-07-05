var fs = require('fs');

var filename = process.argv[2];

var stream = fs.createReadStream(process.argv[2]).pipe(process.stdout);
