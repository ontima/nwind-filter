app.factory('Employee', function ($http) {

	return {
		getByChar: function (char) {
			return $http.get("/api/employees/" + char)
			.then(function (result) {
				return result.data;
			});
		},
		getAll: function(){
			return $http.get("/api/employees")
			.then(function(result){
				return result.data;
			});
		}
	};
});