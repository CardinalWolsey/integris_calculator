require('angular/angular');
var angular = window.angular;

var calculatorApp = angular.module('CalculatorApp', []);
require('./calculator/calculator')(calculatorApp);
