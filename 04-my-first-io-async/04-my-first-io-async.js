const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, function (err, countLines){
  if (err)
  {
    return console.log(err);
  }
  console.log(countLines.toString().split('\n').length -1);
});
