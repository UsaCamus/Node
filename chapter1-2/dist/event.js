"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventEmitter = void 0;
var _events = _interopRequireDefault(require("events"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var eventEmitter = exports.eventEmitter = new _events["default"]({
  captureRejections: true
});