

// In Controller 
nsapp.controller('dashBoardDetailsCtrl', function($scope) {
   
   var initializeonDrill = function() {
        $scope.onDrillEvent();
    }
	
	$scope.onDrillEvent = function() {
	  alert(onDrillData)
	}
 });
 
 
 // In Java script 
 
 var onDrillData = "";
function myJS(data) {
    onDrillData = data;
    var scope = angular.element(document.getElementById("customDrill")).scope();
    scope.$apply(function() {
          if (typeof(ondrill) == 'function') {
              ondrill();
    	  }
    });
} // End custom functions
