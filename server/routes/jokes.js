var express = require("express");
var router = express.Router();

var pool = require('../modules/pool')

var originalJokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Twofish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog,",
    punchLine: "It was a shih tzu."
  }
];

router.get('/', function(req, res){
  	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			//when connecting to database failed...
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			//when connecting to database worked!
			client.query('SELECT * FROM jokes;', function(errorMakingQuery, result){
				done();
				if(errorMakingQuery) {
					console.log('Error making query', errorMakingQuery)
					res.sendStatus(500);
				}
				else {
					res.send(result.rows);
				}
			});//from pg
		}

	});
});

router.post('/', function(req, res){
  	console.log('message post was hit!');
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			//when connecting to database failed...
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			//when connecting to database worked!
			client.query('INSERT INTO jokes(whoseJoke, jokeQuestion, punchLine) VALUES ($1, $2, $3);', [req.body.whoseJoke, req.body.jokeQuestion, req.body.punchLine], function(errorMakingQuery, result){
				done();
				if(errorMakingQuery) {
					console.log('Error making query', errorMakingQuery)
					res.sendStatus(500);
				}
				else {
					res.sendStatus(201);
				}
			});//from pg
		}

	});
});
module.exports = router;