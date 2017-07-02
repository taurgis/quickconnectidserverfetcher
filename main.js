// Load the http module to create an http server.
var http = require('http');
var request = require('request');

var port = process.env.PORT || 8080;

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function(req, resp) {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    resp.setHeader('Access-Control-Allow-Credentials', true);

    var query = require('url').parse(req.url, true).query;

    console.log('Request url: ' + req.url);

    if (req.url.indexOf('server.php') > 0) {
        var x;
        if (query && query.host) {
            console.log('Sending request to: https://' + query.host + '/Serv.php')
            x = request('https://' + query.host + '/Serv.php');
        } else {
            console.log('Sending request to: https://global.quickconnect.to/Serv.php')
            x = request('https://global.quickconnect.to/Serv.php')
        }

        req.pipe(x)
        x.pipe(resp)
    }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:" + port);
