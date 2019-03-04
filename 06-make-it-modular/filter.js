const fs = require('fs');
const path = require('path');

module.exports = function soutionFilter(dir, filterString, callback){
  fs.readdir(dir, function(err, lists){
    if(err)
    {
      return callback(err);
    }
    lists = lists.filter(function(file){
      return path.extname(file) === '.' + filterString;
    })
    callback(null, lists);
  });
}
