app.factory('Product', function ($http) {

	return {
		getByChar: function (char) {
			return $http.get("/api/products/" + char)
			.then(function (result) {
				console.log(result.data);
				return result.data;
			});
		},
		getAll: function(){
			return $http.get("/api/products")
			.then(function(result){
				console.log(result.data);
				return result.data;
			});
		}
	};
});