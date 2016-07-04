var fs = require('fs');

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

fs.readdir(process.argv[2], function (err, files) {
    for (var i = 0; i < files.length; i ++) {
        var regex = '.' + process.argv[3];

        if ((files[i].toString()).endsWith('.' + process.argv[3])) {
            console.log(files[i]);
        }
    }
});


/*
     var fs = require('fs')  
     var path = require('path')  
       
     var folder = process.argv[2]  
     var ext = '.' + process.argv[3]  
       
     fs.readdir(folder, function (err, files) {  
       if (err) return console.error(err)  
       files.forEach(function(file) {  
           if (path.extname(file) === ext) {  
               console.log(file)  
           }  
       })  
     })  
*/
