var http = require('http');
function onRequest(request, response){
    console.log('A user made request '+request.url);
    response.writeHead(200, {'Context-Type':'text/plain'});
    response.write('Here is some data will go!!!');
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log('8888 Server is now running.....');