
app.directive('filter', function(){

	return {
		templateUrl: '/client/javascript/filter/filter.html',
		link: function($scope, $rootScope) {
			$scope.letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
			$scope.disableLetter = function(letter){
				return $scope.firstLetters.indexOf(letter) === -1;
			}
		}
	};

});