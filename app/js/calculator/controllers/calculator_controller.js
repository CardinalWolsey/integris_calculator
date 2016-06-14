module.exports = function(app) {

  app.controller('CalculatorController', ['$scope', '$http', function($scope, $http) {

    $scope.calculate = function(calculation) {
      $http.post('/api/' + calculation.operation, calculation)
        .then(function(res) {
          $scope.calculationResult = res.data.number;
          console.log(res.data.number);
        }, function(err) {
          console.log(err);
          console.log(err.data);
        });
    };

  }]);
};
