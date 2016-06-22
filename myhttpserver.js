var http = require('http');

var PORT = 3000;
var title = 'Hello, World!';
var statement = 'Look out, Matthew is making servers!';
var html = `
<html>
  <head>
    <title>${title}</title>
    <link href="style.css" rel="stylesheet"></link>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>${title}</h1>
    <p>${statement}</p>
  </body>
</html>
`;

var css = `
body {
  background-color: blue;
}
`;

var javascript = `
alert('Hello, World!');
`;
var server = http.createServer(serverRequest);

function serverRequest(request, response) {
  var url = request.url;
  if (url === '/') {
    response.write(html);
  } else if (url === '/style.css') {
    response.write(css);
  } else if (url === '/script.js') {
    response.write(javascript);
  }
  response.end();
}

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});
