var router = require('express').Router();

var db = require('../db/index');
var Employee = db.models.Employee;

//why not return map with the letters
//{ a: true, b: true, f: true}//only letter for employees who have that letter would be returned
router.get('/', function(req, res,next){
	Employee.find({})
	.then(function(employees){
		res.json(employees);
	})
	.then(null, next);
});

router.get('/:char', function(req, res, next){
	var regex = new RegExp('^' + req.params.char);
	Employee.find({name: regex})
	.then(function(employees){
		res.json(employees);
	})
	.then(null, next);
});

module.exports = router;
