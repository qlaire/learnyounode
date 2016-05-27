var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(dir, function(err, list) {
  var filtered = list.filter(function(file) {
    return path.extname(file) == ext;
  });
  var result = filtered.join('\n');
  console.log(result);
});
