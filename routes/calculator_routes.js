var express = require('express');
var bodyParser = require('body-parser');

var studentsRouter = module.exports = exports = express.Router();

studentsRouter.post('/add', bodyParser.json(), function(req, res) {
  if(typeof req.body.firstNumber !== 'number') {
    return res.status(500).json({error: 'please input a number'});
  }
  if(typeof req.body.secondNumber !== 'number') {
    return res.status(500).json({error: 'please input a number'});
  }

  var firstNum = req.body.firstNumber;
  var secondNum = req.body.secondNumber;
  var sum = firstNum + secondNum;
  res.json({number: sum});
});

studentsRouter.post('/subtract', bodyParser.json(), function(req, res) {
  if(typeof req.body.firstNumber !== 'number') {
    return res.status(500).json({error: 'please input a number'});
  }
  if(typeof req.body.secondNumber !== 'number') {
    return res.status(500).json({error: 'please input a number'});
  }

  var firstNum = req.body.firstNumber;
  var secondNum = req.body.secondNumber;
  var difference = firstNum - secondNum;
  res.json({number: difference});
});

studentsRouter.post('/multiply', bodyParser.json(), function(req, res) {
  if(typeof req.body.firstNumber !== 'number') {
    return res.status(500).json({error: 'please input a number'});
  }
  if(typeof req.body.secondNumber !== 'number') {
    return res.status(500).json({error: 'please input a number'});
  }

  var firstNum = req.body.firstNumber;
  var secondNum = req.body.secondNumber;
  var product = firstNum * secondNum;
  res.json({number: product});
});

studentsRouter.post('/divide', bodyParser.json(), function(req, res) {
  if(typeof req.body.firstNumber !== 'number') {
    return res.status(500).json({error: 'please input a number'});
  }
  if(typeof req.body.secondNumber !== 'number') {
    return res.status(500).json({error: 'please input a number'});
  }

  var firstNum = req.body.firstNumber;
  var secondNum = req.body.secondNumber;
  var quotient = firstNum / secondNum;
  res.json({number: quotient});
});
