var http = require('http');

var response = http.get(process.argv[2], function(res) { 
    var content = '';

    res.setEncoding('utf8');
    res.on('data', function(data) {

        content = content + data;
    });

    res.on('error', console.error);

    res.on('end', function() {
        console.log(content.length); 
        console.log(content);
    });

    res.resume()
});

/*
     var http = require('http')  
     var bl = require('bl')  
       
     http.get(process.argv[2], function (response) {  
       response.pipe(bl(function (err, data) {  
         if (err)  
           return console.error(err)  
         data = data.toString()  
         console.log(data.length)  
         console.log(data)  
       }))    
     })  
*/
