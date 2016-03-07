app.controller('itemController', ['$scope', 'items', function($scope, items) { 
 items.success(function(data) { 
    $scope.idata = data; 
  }); 
}]);