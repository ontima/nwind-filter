var db = require('./index.js');
var models = db.models;
var Product = models.Product;
var Employee = models.Employee;
var Promise = require('bluebird');

var seed = function(){
  return db.connect()
    .then(function(){
      return Employee.remove();
    })
    .then(function(){
      return Product.remove();
    })
    .then(function(){
      return Employee.create(employees);
    })
    .then(function(){
      return Product.create(products);
    })
};



var employees = 
[{"name":"Keith Adams"},
{"name":"Catherine Wilson"},
{"name":"Patricia Nguyen"},
{"name":"Paul Austin"},
{"name":"Julia Hernandez"},
{"name":"Harry Schmidt"},
{"name":"Sandra Wagner"},
{"name":"Jason Ford"},
{"name":"Randy Rice"},
{"name":"Jason Rice"},
{"name":"Mildred Bell"},
{"name":"Rose Perry"},
{"name":"Charles Hunter"},
{"name":"Julie Burke"},
{"name":"Phyllis Sims"},
{"name":"Christopher Young"},
{"name":"Kathryn Rose"},
{"name":"Sarah Hudson"},
{"name":"Carol Richardson"},
{"name":"Katherine Welch"},
{"name":"Mary Fields"},
{"name":"Christopher Bennett"},
{"name":"Joan Chavez"},
{"name":"Jonathan Thompson"},
{"name":"Brenda Jackson"},
{"name":"Walter Johnston"},
{"name":"Sean Rose"},
{"name":"Jason Graham"},
{"name":"Shirley Murphy"},
{"name":"Earl Hunt"},
{"name":"Dorothy Wallace"},
{"name":"Louis Lee"},
{"name":"Alan Mccoy"},
{"name":"Janet Mendoza"},
{"name":"Albert Martinez"},
{"name":"Mary Walker"},
{"name":"Harry Diaz"},
{"name":"Rebecca Martin"},
{"name":"Donald Stephens"},
{"name":"Gerald Henry"},
{"name":"Brian Simmons"},
{"name":"Louise Johnston"},
{"name":"Robin Davis"},
{"name":"Catherine White"},
{"name":"Todd Knight"},
{"name":"Jessica Barnes"},
{"name":"Kimberly Hart"},
{"name":"Louise Turner"},
{"name":"Judith Mcdonald"},
{"name":"Harry Martinez"}];

var products = 
[{"name":"Trilith"},
{"name":"Feednation"},
{"name":"Chatterpoint"},
{"name":"Mynte"},
{"name":"Avaveo"},
{"name":"Zoomlounge"},
{"name":"Myworks"},
{"name":"Quamba"},
{"name":"Riffpedia"},
{"name":"Realbridge"},
{"name":"Yata"},
{"name":"Feedbug"},
{"name":"Feednation"},
{"name":"Voolia"},
{"name":"Jabbersphere"},
{"name":"Mita"},
{"name":"Quire"},
{"name":"Zoombeat"},
{"name":"Avaveo"},
{"name":"Buzzshare"},
{"name":"Voonyx"},
{"name":"Meezzy"},
{"name":"Dabshots"},
{"name":"Meevee"},
{"name":"Rhybox"},
{"name":"Agimba"},
{"name":"Devify"},
{"name":"Wikivu"},
{"name":"Wikivu"},
{"name":"Topdrive"},
{"name":"Gabtype"},
{"name":"Meeveo"},
{"name":"Browsetype"},
{"name":"Eadel"},
{"name":"Skyba"},
{"name":"Dabtype"},
{"name":"Topicshots"},
{"name":"Tambee"},
{"name":"Lajo"},
{"name":"Flashset"},
{"name":"Yambee"},
{"name":"Twitternation"},
{"name":"Photojam"},
{"name":"Edgeblab"},
{"name":"Gabtype"},
{"name":"Yakidoo"},
{"name":"Riffpath"},
{"name":"Meetz"},
{"name":"Linkbridge"},
{"name":"Tekfly"}];


module.exports = seed;