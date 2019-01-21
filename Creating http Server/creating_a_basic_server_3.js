var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response){
    console.log('Profile is calling......');
}
function forum(request, response){
    console.log('Forum is calling......');
}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8882);
console.log('8882 Server is runing now.....');