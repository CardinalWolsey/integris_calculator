var express = require('express');
var bodyParser = require('body-parser');

var studentsRouter = module.exports = exports = express.Router();

studentsRouter.post('/add', bodyParser.json(), function(req, res) {
  console.log(req.body);
  var firstNum = req.body.firstNumber;
  var secondNum = req.body.secondNumber;
  var sum = firstNum + secondNum;
  console.log(sum);
  res.json({number: sum});
});

studentsRouter.post('/subtract', bodyParser.json(), function(req, res) {
  var firstNum = req.body.firstNumber;
  var secondNum = req.body.secondNumber;
  var difference = firstNum - secondNum;
  res.json({number: difference});
});

studentsRouter.post('/multiply', bodyParser.json(), function(req, res) {
  var firstNum = req.body.firstNumber;
  var secondNum = req.body.secondNumber;
  var product = firstNum * secondNum;
  res.json({number: product});
});

studentsRouter.post('/divide', bodyParser.json(), function(req, res) {
  var firstNum = req.body.firstNumber;
  var secondNum = req.body.secondNumber;
  var quotient = firstNum / secondNum;
  res.json({number: quotient});
});
