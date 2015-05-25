//server.js

var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    // var postData = '';
    var pathname = url.parse(request.url).pathname;
    console.log('request for ' + pathname + ' received');
    route(handle, pathname, response, request);
}
    // request.addListener('data', function(postDataChunk) {
    //   postData += postDataChunk;
    //   console.log('Received POST data chunk "postDataChunk"');
    // });

    // request.addListener('end', function() {
    //   route(handle, pathname, response, postData);
    // });
  // }
  var port = 8888;
  http.createServer(onRequest).listen(port);
  console.log('server has started - listening on port '+port);
}

exports.start = start;