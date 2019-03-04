const filterFunction = require('./filter.js');
const dir = process.argv[2];
const extension = process.argv[3];

filterFunction(dir, extension, function(err, lists){
  if(err) {
    return console.log(err);
  }
  lists.forEach(function(file){
      console.log(file);
  });
});
