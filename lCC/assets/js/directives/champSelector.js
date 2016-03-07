app.directive('champSelector', function() { 
  return { 
    restrict: 'E', 
    scope: { 
     	data:"="
    }, 
    templateUrl: 'js/directives/champSelector.html' 
  }; 
});