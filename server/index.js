const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const sampleData = require('../sampleData/sampleData.js')
const yelp = require('../helpers/yelpApi.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/data', (req, res) => {
	// Route for initial seeding of the client on startup

	// return dummy data for now
	let data = sampleData.massagedDataOP;
	
	res.send(data);
})


app.get('/data/city', (req, res) => {
	// Route for getting restaurants for particular city

	// query database

	res.send();
})


app.post('/book', (req, res) => {
	// Route for booking a reservation

	// change database

	res.send();
})	


app.put('/cancel', (req, res) => {
	// Route for canceling a reservation (updating records)

	// twillio
	// db

	res.send();
})


app.get('/phone', (req, res) => {
	// Route for getting reservations for phone number

	// twillio
	// db

	res.send();
})



app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) })
