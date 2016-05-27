var filteredLs = require('./filtered_ls_module');

var dir = process.argv[2];
var ext = process.argv[3];

filteredLs(dir, ext, function(err, list) {
  if (err) {
    return cosole.error("There was an error:", err);
  }
  console.log(list.join('\n'));
});
