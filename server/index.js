const express = require('express');
const bodyParser = require('body-parser');
const yelp = require('../helpers/yelpApi.js');
// const twilio = require('../helpers/twilioApi.js');
const _ = require('underscore');
const path = require('path');
const moment = require('moment');
<<<<<<< 64583a8abafb406d827482d6078a9035b51f2628
const { seedNewCity, queryCity } = require('../database/index.js');
=======
const { client, SEED_NEW_CITY } = require('../database/index.js');
const pg = require('pg');

>>>>>>> added pg

const PORT = 3000;
const app = express();
let visitedCities = ['San Francisco, CA'];

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< 760b843949ea9248996d630630b1bb3141e3d14d
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
=======
SEED_NEW_CITY(sampleData.massagedDataYelp.businesses);
console.log('data has been seeded');

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
				times: res.reservations.map( slot => {return moment(slot.time).format('LT')} ),
				categories: res.categories.map( slot => {return slot.title} )
			};

	});

	// yelp.getRestaurantsByCity().then((results)=>{
	// 	console.log('results.data', results.data);
	// 	//Do the res.json here once you have the data in the way you want to send it
	// }).catch(()=>{
	// 	console.log('error');
	// })



	
	res.send(data);
})


app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});

app.get('/data/city', (req, res) => {
	// Route for getting restaurants for particular city

	// query database

	res.send();
})
>>>>>>> added procfile


app.post('/book', (req, res) => {
  // Route for booking a reservation

  // req.body should contain a reservation id, and phone number

  // add phone number to reservation and change 

  res.send();
});

app.put('/cancel', (req, res) => {
  // Route for canceling a reservation (updating records)

  // req.body should contain a reservation id

<<<<<<< 760b843949ea9248996d630630b1bb3141e3d14d
  // remove phone number from reservation 
=======
	// twillio

	// twilio.sendCancelMsg().then(()=>{
	// 	console.log('cancel message sent');
	// });

	// db
>>>>>>> added procfile

  res.send();
});


app.get('/phone', (req, res) => {
  // Route for getting reservations for phone number

<<<<<<< 760b843949ea9248996d630630b1bb3141e3d14d
  // req.body sould contain phone number
=======
	// twillio

	// twilio.sendAcceptMsg().then(()=>{
	// 	console.log('accept message sent');
	// });
	// db
>>>>>>> added procfile

  //query db for all reservations linked to PN

  // send back array of reservaitons

  res.send();
});

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
