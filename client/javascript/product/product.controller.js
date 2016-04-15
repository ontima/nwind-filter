app.controller('ProductCtrl', function($scope, allProducts, filteredProducts){
	$scope.products = filteredProducts;

	var firstLetters = [];
  //you could do this client side too
	allProducts.forEach(function(product){
		var letter = product.name.charAt(0);
		if (firstLetters.indexOf(letter) === -1){
			firstLetters.push(letter);
		}
	});
	$scope.firstLetters = firstLetters;
});
