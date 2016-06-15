require('angular/angular');
var angular = window.angular;

var calculatorApp = angular.module('CalculatorApp', []);
require('./services/services')(calculatorApp);
require('./calculator/calculator')(calculatorApp);
