
var concat = require('concat-stream');

function reverse(buffer) {
    var reversed_buffer = buffer.toString().split("").reverse().join("");
    console.log(reversed_buffer);
}

process.stdin
    .pipe(concat(reverse));
