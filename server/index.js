const express = require('express');
const bodyParser = require('body-parser');
const yelp = require('../helpers/yelpApi.js');
// const twilio = require('../helpers/twilioApi.js');
const _ = require('underscore');
const path = require('path');
const moment = require('moment');
const { seedNewCity, queryCity } = require('../database/index.js');

const PORT = 3000;
const app = express();
let visitedCities = ['San Francisco, CA'];

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// initialize the database with a pull for SF restaurants

let cityData = [];

const seedParialData = (location, pageNumber) => new Promise((resolve, reject) => {
  yelp.getRestaurantsByCity(location, pageNumber)
    .then(partialResults => {
    	// console.log('this is what comes back from yelp: ', partialResults);
      cityData = cityData.concat(partialResults.data.businesses);
      resolve(partialResults);
    })
    .catch(err => reject(err));
});

const SEED = (location = 'San Francisco, CA') => {
  const completeCityData = [];
  for (let i = 0; i < 20; i += 1) {
    completeCityData.push(seedParialData(location, i));
  }
  Promise.all(completeCityData)
    .then(() => {
    	seedNewCity(cityData);
    	console.log(`Number of restaurants in DB for ${location}: ', ${cityData.length}`);
  });
};

Promise.resolve(SEED())
  .then(() => {
    console.log('go check the DB for SF');
  });

// const cityData = [];
// Promise.resolve(yelp.getRestaurantsByCity('San Francisco, CA', i))
//   .then((partialResults) => {
//   	cityData.push(partialResults);
//   })

// Promise.all(testArray)
//   .then((haha) => {
//     console.log('alooasdfadsf');
//     console.log(haha);
//   });


app.get('/data', (request, response) => {
  yelp.getRestaurantsByCity()
    .then((yelpResults) => {
      seedNewCity(yelpResults.data.businesses)
        .then(() => {
          queryCity()
            .then((cityResults) => {
              response.send(cityResults.rows);

            })
            .catch((err) => {
              throw err;
            });
        })
        .catch((err) => {
          throw err;
        });


      const reservations = [{
        time: '2017-11-20T19:30:00Z',
        people: 7
      }, {
        time: '2017-11-20T20:00:00Z',
        people: 3
      }
      ];

      const data = _.map(yelpResults.data.businesses, (res) => {
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


      // response.send(data);
    }).catch((err) => {
      console.log('error', err);
    });
});


app.post('/book', (req, res) => {
  // Route for booking a reservation

  // req.body should contain a reservation id, and phone number

  // add phone number to reservation and change 

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
