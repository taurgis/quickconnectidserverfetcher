// Load the http module to create an http server.
var http = require('http');
var request = require('request');


// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function(req, resp) {
    if (req.url === '/server.php') {
        var x = request('https://global.quickconnect.to/Serv.php')
        req.pipe(x)
        x.pipe(resp)
    }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
