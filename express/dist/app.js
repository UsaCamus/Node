"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var app = (0, _express["default"])();

/*app.get('/test-express', (req, res) => {
    // res.send("Hello Wolrd")
    res.json({
        name: "Usa",
        position: "Software Engineer",
        company: "Gosoft"
    })
})*/

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
var todoList = [];
app.post('/todos/bulk', function (req, res) {
  todoList.push.apply(todoList, _toConsumableArray(req.body));
  res.send(req.body);
});
app.post('/todos', function (req, res) {
  todoList.push(req.body);
  res.send(req.body);
});
app["delete"]('/todos/:id', function (req, res) {
  var todoIndex = todoList.findIndex(function (todo) {
    return todo.id === req.params.id;
  });
  if (todoIndex === -1) {
    res.status(404).send("Todo not found");
    return;
  }
  todoList.splice(todoIndex, 1);
  res.send(req.params.id);
});
app.put('/todos/:id', function (req, res) {
  var todoIndex = todoList.findIndex(function (todo) {
    return todo.id === req.params.id;
  });
  if (todoIndex === -1) {
    res.status(404).send("Todo not found");
    return;
  }
  todoList[todoIndex] = req.body;
  res.send(todoList[todoIndex]);
});
app.patch('/todos/:id', function (req, res) {
  var todoIndex = todoList.findIndex(function (todo) {
    return todo.id === req.params.id;
  });
  if (todoIndex === -1) {
    res.status(404).send("Todo not found");
    return;
  }
  todoList[todoIndex] = _objectSpread(_objectSpread({}, todoList[todoIndex]), req.body);
  res.send(todoList[todoIndex]);
});
app.get('/todos', function (req, res) {
  res.send(todoList);
});
app.get('/todos/:id', function (req, res) {
  var todo = todoList.find(function (todo) {
    return todo.id === req.params.id;
  });
  if (todo) {
    res.send(todo);
  }
  res.status(404).send('Todo Not Found');
});
app.listen(3002, function () {
  console.log('http://localhost:3002');
});