const http = require('http')
const fs = require('fs')
var routes=require('./routes');

http.createServer(routes.handleRequest).listen(3000);


