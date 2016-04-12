var router = require('express').Router();

var db = require('../db/index');
var Product = db.models.Product;

router.get('/', function(req, res,next){
	Product.find({})
	.then(function(products){
		console.log(products);
	});
});

router.get('/:char', function(req, res, next){
	var regex = new RegExp('^' + req.params.char);
	Product.find({name: regex})
	.then(function(products){
		console.log(products);
	});	
});

module.exports = router;