const http = require('http');
const requestURL = process.argv[2];

http.get(requestURL, function(res){
  res.setEncoding('utf8');
  res.on('data', console.log);
  res.on('end', console.log);
  res.on('error', console.error);
}).on('error', console.error);
