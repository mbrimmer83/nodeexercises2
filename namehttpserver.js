var http = require('http');

var PORT = 3000;

function serverRequest(request, response) {
  var urlInfo = require('url').parse(request.url, true);
  var name = urlInfo.query.name;
  response.end('Hello, ' + name + '!');
}

var server = http.createServer(serverRequest);

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});
