const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/data', (req, res) => {
	// Route for initial seeding of the client on startup
	console.log('got it');
	res.send();
})


app.get('/data/city', (req, res) => {
	// Route for getting restaurants for particular city
	res.send();
})


app.post('/book', (req, res) => {
	// Route for booking a reservation
	res.send();
})	


app.put('/cancel', (req, res) => {
	// Route for canceling a reservation (updating records)
	res.send();
})


app.get('/phone', (req, res) => {
	// Route for getting reservations for phone number
	res.send();
})



app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) })
