const express = require('express');
const bodyParser = require('body-parser');
const sampleData = require('../sampleData/sampleData.js');
const yelp = require('../helpers/yelpApi.js');
// const twilio = require('../helpers/twilioApi.js');
const _ = require('underscore');
const path = require('path');
const moment = require('moment');
const { client, SEED_NEW_CITY } = require('../database/index.js');

const PORT = 3000;
const app = express();
let VISITED_CITIES = [];

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

SEED_NEW_CITY(sampleData.massagedDataYelp.businesses);

app.get('/data', (request, response) => {
  // GETS SF DATA AS INITIAL SEED
  yelp.getRestaurantsByCity()
    .then((results) => {
      const reservations = [{
        time: '2017-11-20T19:30:00Z',
        people: 7
      }, {
        time: '2017-11-20T20:00:00Z',
        people: 3
      }
      ];

      
      const data = _.map(results.data.businesses, (res) => {
        const output = {
          name: res.name,
          image_url: res.image_url,
          reservations: reservations,
          partySizes: reservations.map((slot) => {return slot.people}),
          times: reservations.map((slot) => {return moment(slot.time).format('LT')}),
          categories: res.categories.map((slot) => {return slot.title})
        };
        return output;
      });


      response.send(data);
    }).catch((err) => {
      console.log('error', err);
    });
});


app.post('/data/city', (req, res) => {
  // Route for getting restaurants for particular city

  // Check visited cities array to see if we have already found it
  if (VISITED_CITIES.indexOf(req.body.city) < 0) {
    var data = sampleData.massagedDataYelp.businesses;
    yelp.getRestaurantsByCity(req.body.city)
      .then((result) => {

        // run result.data.businesses through massager
        // add to city array in server
        // input into db
        // retrieve from db
        // send to client

        console.log(result);
        res.send(data);
      })
      .catch((err) => {
        throw err;
      });

  } else {
    var data = sampleData.massagedDataYelp.businesses;
    // retrieve from db
    // send to client
    res.send(data);
  }
});


app.post('/book', (req, res) => {
  // Route for booking a reservation

  // req.body should contain a reservation id, and phone number

  // add phone number to reservation 

  res.send();
});

app.put('/cancel', (req, res) => {
  // Route for canceling a reservation (updating records)

  // req.body should contain a reservation id

  // remove phone number from reservation 

  res.send();
});


app.get('/phone', (req, res) => {
  // Route for getting reservations for phone number

  // req.body sould contain phone number

  //query db for all reservations linked to PN

  // send back array of reservaitons

  res.send();
});

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
