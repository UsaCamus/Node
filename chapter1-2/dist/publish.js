"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emitData = emitData;
var _event = require("./event");
function emitData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      _event.eventEmitter.emit('Mr.a', "Send data to Mr.a across module");
      resolve();
    }, 1000);
  });
}