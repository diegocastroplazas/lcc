app.factory('items', ['$http', function($http) {
  return $http.get('http://192.168.0.17:1337/item/getItems')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
