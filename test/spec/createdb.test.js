describe('testing content', function () {
    'use strict';
	var contentArr=[];
	var db;

	beforeAll(function() {
    	
 	// jasmine.getFixtures().fixturesPath = "base/src/";
 	// var content = JSON.parse(readFixtures("content.json"));

	db = new PouchDB('./content26', {adapter: 'websql'});
	console.log(db.adapter);



 //    for (var key in content) {
 //    	if (content.hasOwnProperty(key)) {
 //    		console.log(key);
 //    		if(!key.startsWith('cat')){
	//     		contentArr.push(content[key]);
	//     		//db.put(content[key]);
 //    		}
	// 	}
	// }
  	});
	
	

	



	// xit('create database', function () {
	// 	console.log('len' + contentArr.length);
	// db.bulkDocs(contentArr).then(function (){
 //        console.error('dbbulkdocs');
 //        throw 'sss';
	// }).catch(function (err) {
 //  		console.error('error: ' +err);
 //  		throw err;
	// });
 //    	expect('1').toEqual('1');
        
 //    });


    it('create database', function () {
		db.put({'assa':'sdsfs'});
    	expect('1').toEqual('2');
        
    });


});