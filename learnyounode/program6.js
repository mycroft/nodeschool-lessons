var mymodule = require('./mymodule6');

var folder = process.argv[2]  
var ext = process.argv[3]  

var callback = function(err, data) {
	if (err)
		console.log(err);

	data.forEach(function(file) {
		console.log(file);
	});
};

mymodule(folder, ext, callback);

