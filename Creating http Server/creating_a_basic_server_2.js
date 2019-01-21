// One learning, How to host websites
var http = require('http');
var file_system = require('fs');

// 404 response
function send404Response1(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Rerroe 404: Page not foound!');
    response.end();
}

// Handle user request
function onRequest1(request, response){
    console.log('request method: '+request.method);
    console.log('n/request url: '+request.url);
    if(request.method == 'GET' && request.url == '/index.php'){
        // response.writeHead('200', {'Content-Type': 'text/plain'});
        response.writeHead(200, {'Content-Type': 'text/html'});
        // response.writeHead('200', {'Content-Type': 'text/php'});
        file_system.createReadStream('./index.php').pipe(response);
        // response.end(); // why is only this line of code not working here? output is blank.
    } else{
        send404Response1(response);
    }
}

http.createServer(onRequest1).listen(8881);
console.log('8881 Server is now running.....');