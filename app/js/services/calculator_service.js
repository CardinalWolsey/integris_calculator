module.exports = function(app) {
  app.factory('Calc', ['$http', function($http) {
    return {
      calculate: function(calculationObject) {
        return $http.post('/api/' + calculationObject.operation, calculationObject);
      }
    };
  }]);
};
