var pg = require('pg')//postgres node module

var config = {
	database: 'betelgeuse3', //the name of the database
	host: 'localhost', //where database is located	
	post: 5432, // port number for database
	max: 10, //the number of connections allowed at a time
	idleTimeoutMillis: 30000 // 30 seconds to try and connect
}

module.exports = pg.Pool(config); //what goes on the left side