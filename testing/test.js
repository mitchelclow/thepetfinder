function assert(data, test, value) {
	if ( test == 'type' ) {
		return typeof data == value
	}
}


function testUserLost(db) {
	db.user_lost.create({
		nameLost: 'JD',
		petName: 'Daisy',
		emailLost: 'jdtadlock@yahoo.com',
		phoneLost: '555-555-5555',
		addressLost: '555 Code Avenue',
		typeLost: 'dog',
		dateLost: '8/29/2017',
		genderLost: 'female',
		commentLost: 'She is awesome'
	})
  .then(function(dbPost) {
  	console.log('should create user');
    console.log(assert(dbPost, 'type', 'object'));
  });
}


module.exports = function(app, db) {

	testUserLost(db);
}
