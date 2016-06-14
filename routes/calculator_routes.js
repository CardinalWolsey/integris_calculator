var express = require('express');
var bodyParser = require('body-parser');
var typeCheck = require(__dirname + '/../lib/type_check');

var studentsRouter = module.exports = exports = express.Router();

studentsRouter.post('/add', bodyParser.json(), typeCheck, function(req, res) {
  var firstNum = req.body.firstNumber;
  var secondNum = req.body.secondNumber;
  var sum = firstNum + secondNum;
  res.json({number: sum});
});

studentsRouter.post('/subtract', bodyParser.json(), typeCheck, function(req, res) {
  var firstNum = req.body.firstNumber;
  var secondNum = req.body.secondNumber;
  var difference = firstNum - secondNum;
  res.json({number: difference});
});

studentsRouter.post('/multiply', bodyParser.json(), typeCheck, function(req, res) {
  var firstNum = req.body.firstNumber;
  var secondNum = req.body.secondNumber;
  var product = firstNum * secondNum;
  res.json({number: product});
});

studentsRouter.post('/divide', bodyParser.json(), typeCheck, function(req, res) {
  var firstNum = req.body.firstNumber;
  var secondNum = req.body.secondNumber;
  var quotient = firstNum / secondNum;
  res.json({number: quotient});
});
