
const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {  fs.readFile('coin.html', function(err, data)
{res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
res.end();
  });
}).listen(8000);
