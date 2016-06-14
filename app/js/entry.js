require('angular/angular');
var angular = window.angular;

//
var calculatorApp = angular.module('CalculatorApp', []);
// require('./services/services')(bearStreamApp);
require('./calculator/calculator')(calculatorApp);
// require('./bears/bears')(bearStreamApp);
