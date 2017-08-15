CREATE TABLE jokes (
	id serial PRIMARY KEY,
	whoseJoke VARCHAR(80) NOT NULL,
	jokeQuestion VARCHAR(140) NOT NULL,
	punchLine VARCHAR (140) NOT NULL
	);
SELECT * FROM jokes;

INSERT INTO jokes (whoseJoke,jokeQuestion,punchLine)
VALUES 
('Danny','Why do scuba divers fall backwards out of boats?
','"If they fell forwards they’d still be in the boat"
'),
('Luke','Twofish are in a tank. What did one fish say to the other?
','Do you know how to drive this thing?
'),
('Millie','What do you call a pile of cats?
','A meowntain!
'),
('dEv','Why should you not play cards in the forest?
','Too many Cheetahs
'),
('Scott','I went to the zoo the other day, it had one dog,
','It was a shih tzu
')