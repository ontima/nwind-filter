app.config(function ($stateProvider) {
	$stateProvider.state('employee', {
		url: '/employees/:char',
		templateUrl: '/client/javascript/employee/employee.html',
		controller: 'EmployeeCtrl',
		resolve: {
			filteredEmployees: function (Employee, $stateParams) {
				console.log("char: ", $stateParams.char);
				if (!$stateParams.char)
					return;
				return Employee.getByChar($stateParams.char);
			},
			allEmployees: function(Employee){
				return Employee.getAll();
			}
		}
	});
});