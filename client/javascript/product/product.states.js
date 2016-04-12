app.config(function ($stateProvider) {
	$stateProvider.state('product', {
		url: '/products/:char',
		templateUrl: '/client/javascript/product/product.html',
		//template: '<h2>hello</h2>',
		controller: 'ProductCtrl',
		resolve: {
			filteredProducts: function (Product, $stateParams) {
				console.log("char: ", $stateParams.char);
				if (!$stateParams.char)
					return;
				return Product.getByChar($stateParams.char);
			},
			allProducts: function(Product){
				return Product.getAll();
			}
		}
	});
});