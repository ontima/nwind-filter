var db = require('./index.js');
var models = db.models;
var Product = models.Product;
var Employee = models.Employee;
var Promise = require('bluebird');

var seed = function(){
  return db.connect()
    .then(function(){
      return Promise.join(
        Product.create({name: 'Foo'}),
        Product.create({name: 'Bar'}),
        Product.create({name: 'Bazz'}),
        Employee.create({name: 'Ontima'}),
        Employee.create({name: 'Joe'}),
        Employee.create({name: 'John'})
      );
    });
};

module.exports = seed;