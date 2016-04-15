//why not call this state products?
app.config(function ($stateProvider) {
	$stateProvider.state('product', {
		url: '/products/:char',
		templateUrl: '/client/javascript/product/product.html',
		controller: 'ProductCtrl',
		resolve: {
			filteredProducts: function (Product, $stateParams) {
        //is char optional?
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
