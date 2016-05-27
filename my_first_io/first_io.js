var fs = require('fs');
var buf_array = fs.readFileSync(process.argv[2]).toString().split('\n');
console.log(buf_array.length - 1);
