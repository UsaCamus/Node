"use strict";

var _fs = require("fs");
var readStream = (0, _fs.createReadStream)('future.txt');
readStream.on('data', function (data) {
  console.log(data.toString());
});