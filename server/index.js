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
  // Route for initial seeding of the client on startup

  // massages data to include all keys mentioned
  // massages times, partysizes, and categories into on array each
  // to be sent back to client
  // This allows for easier parsing of the data in the filter dropdowns


  // let data = _.map(sampleData.massagedDataYelp.businesses, (res) => {
  //   return output = {
  //     name: res.name,
  //     image_url: res.image_url,
  //     reservations: res.reservations,
  //     partySizes: res.reservations.map( (slot) => {return slot.people} ),
  //     times: res.reservations.map( (slot) => {return moment(slot.time).format('LT')} ),
  //     categories: res.categories.map( (slot) => {return slot.title} )
  //   };
  // });

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
    // query api
    var data = sampleData.massagedDataYelp.businesses;
  } else {
    // query db
    var data = sampleData.massagedDataYelp.businesses;
  }

  res.send(data);
});


app.post('/book', (req, res) => {
  // Route for booking a reservation

  // change database

  res.send();
});

app.put('/cancel', (req, res) => {
  // Route for canceling a reservation (updating records)

  // twillio
  // db

  res.send();
});


app.get('/phone', (req, res) => {
  // Route for getting reservations for phone number

  // twillio
  // db

  res.send();
});

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
