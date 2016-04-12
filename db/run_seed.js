var seed = require('./seed.js');
var db = require('./index.js');

seed()
.then(function(){
  return db.disconnect();
})
.then(function(){
  console.log('db has been seeded');
});