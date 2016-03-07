app.controller('champController', ['$scope', 'champions', function($scope, champions) { 
 
 	champions.success(function(data) { 
    	$scope.cdata = data; 
  	}); 
}]);