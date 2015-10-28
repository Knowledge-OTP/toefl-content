var PouchDB = require('pouchdb');
var fs = require('fs');




var db = new PouchDB('./content');
console.log(db.adapter);

var obj;
fs.readFile('src/content.json', 'utf8', function (err, data) {
  if (err){
  	console.log('err');
  	throw err;
  } 
  obj = JSON.parse(data);
  console.log('success');
});
