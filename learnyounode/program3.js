var fs = require('fs');

var file_content = fs.readFileSync(process.argv[2]);

var lines = file_content.toString().split('\n');

console.log(lines.length - 1);
