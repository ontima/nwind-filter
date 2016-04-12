app.config(function ($stateProvider) {
	$stateProvider.state('employee', {
		url: '/employees/:char',
		templateUrl: '/client/javascript/employee/employee.html',
		controller: 'EmployeeCtrl',
		resolve: {
			filteredEmployees: function (Employee, $stateParams) {
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