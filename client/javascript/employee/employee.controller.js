app.controller('EmployeeCtrl', function($scope, allEmployees, filteredEmployees){
	$scope.employees = filteredEmployees;

	var firstLetters = [];
	allEmployees.forEach(function(employee){
		var letter = employee.name.charAt(0);
		if (firstLetters.indexOf(letter) === -1){
			firstLetters.push(letter);
		}
	});
	$scope.firstLetters = firstLetters;
});
