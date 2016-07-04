var http = require('http');

var result = ['', '', ''];
var results_recieved = 0;

function get(url, idx) {
    http.get(url, function(res) {
        res.setEncoding('utf8');

        res.on('data', function(data) {
            result[idx] += data;
        });

        res.on('end', function() {
            results_recieved ++;

            if (3 == results_recieved) {
                for (var i = 0; i < 3; i ++) {
                    console.log(result[i]);
                }
            }
        });

        res.resume();
    });
}

for (var i = 0; i < 3; i ++) {
    get(process.argv[i + 2], i);
}

/*
     var http = require('http')  
     var bl = require('bl')  
     var results = []  
     var count = 0  
       
     function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     }  
       
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)  
*/

