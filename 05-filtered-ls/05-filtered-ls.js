const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(dir, function(err, lists){
  if(err)
  {
    return console.log(err);
  }
  lists.forEach(function(file){
    if(path.extname(file) === extension){
      console.log(file);
    }
  });
});
