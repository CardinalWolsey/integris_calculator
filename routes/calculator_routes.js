var express = require('express');
var bodyParser = require('body-parser');

var studentsRouter = module.exports = exports = express.Router();

studentsRouter.post('/add', bodyParser.json(), function(req, res) {
  //put adding functionality here and return sum
});

studentsRouter.post('/subtract', bodyParser.json(), function(req, res) {
  //put subtraction functionality here and return difference
});

studentsRouter.post('/multiply', bodyParser.json(), function(req, res) {
  //put multiplicaiton functionality here and return product
});

studentsRouter.post('/divide', bodyParser.json(), function(req, res) {
  //put division functionality here and return quotient
});
