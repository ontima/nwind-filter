var router = require('express').Router();

var db = require('../db/index');
var Product = db.models.Product;

router.get('/', function(req, res,next){
	Product.find({})
	.then(function(products){
		res.json(products);
	})
	.then(null, next);
});

router.get('/:char', function(req, res, next){
	var regex = new RegExp('^' + req.params.char);
	Product.find({name: regex})
	.then(function(products){
		res.json(products);
	})
	.then(null, next);
});

module.exports = router;