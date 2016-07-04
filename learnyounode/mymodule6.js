var fs = require('fs')  
var path = require('path')  

module.exports = function (folder, ext, callback) {
	return fs.readdir(folder, function (err, files) {  
		if (err)
			return callback(err);

		list = files.filter(function (file) {
			return path.extname(file) === '.' + ext;
		});

		callback(null, list);
	});
}


/*
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)

*/
