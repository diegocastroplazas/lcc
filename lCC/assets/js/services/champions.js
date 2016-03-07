app.factory('champions', ['$http', function($http) { 
  return $http.get('http://192.168.0.17:1337/champion/getChampionInfo') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);