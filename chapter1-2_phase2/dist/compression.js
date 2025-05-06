"use strict";

var _fs = require("fs");
var _zlib = require("zlib");
var readMyProfileStream = (0, _fs.createReadStream)('gitlap.png');
var writeProfileCompressionStream = (0, _fs.createWriteStream)('gitlap.gz');
readMyProfileStream.pipe((0, _zlib.createGzip)({
  flush: 0
})).pipe(writeProfileCompressionStream).on('finish', function () {
  console.log('cpmpressed finish');
});