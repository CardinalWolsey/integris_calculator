module.exports = function(app) {

  app.controller('CalculatorController', ['$scope', '$http', 'Calc', function($scope, $http, Calc) {

    $scope.calculate = function() {
      Calc.calculate($scope.calculation)
        .then(function(res) {
        $scope.calculationResult = res.data.number;
        console.log(res.data.number);
      }, function(err) {
        console.log(err.data);
      });
    };
  }]);
};
