const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const sampleData = require('../sampleData/sampleData.js')
const yelp = require('../helpers/yelpApi.js');
const _ = require('underscore');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/data', (req, res) => {
	// Route for initial seeding of the client on startup

	// massages data to include all keys mentioned
	// massages times, partysizes, and categories into on array each
	// to be sent back to client
	// This allows for easier parsing of the data in the filter dropdowns
	let data = _.map(sampleData.massagedDataYelp.businesses, (res) => {
			return output = {
				name: res.name,
				image_url: res.image_url,
				reservations: res.reservations,
				partySizes: res.reservations.map( slot => {return slot.people} ),
				times: res.reservations.map( slot => {return slot.time} ),
				categories: res.categories.map( slot => {return slot.title} )
			};

	});


	
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
