const postgres = require('pg');
const moment = require('moment');

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/tableopen';

const client = new postgres.Client({
  connectionString,
  // ssl: true
});

client.connect();

// create schema for restaurants
client.query('DROP TABLE restaurants');
client.query(`CREATE TABLE IF NOT EXISTS restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zip VARCHAR(255),
  url VARCHAR(255),
  image VARCHAR(255),
  phone VARCHAR(255),
  reviews INT,
  rating DECIMAL
)`);

// create schema for reservations
client.query('DROP TABLE reservations');
client.query(`CREATE TABLE IF NOT EXISTS reservations (
  id SERIAL PRIMARY KEY,
  restaurant_id INT,
  time VARCHAR(255),
  party_size INT,
  customer_id INT DEFAULT NULL,
  status BOOLEAN DEFAULT FALSE
)`);

const fakeReservationGenerator = (restaurantId) => {
  // create 1-3 fake reservations
  const reservationCount = Math.ceil(Math.random() * 3);
  for (let i = 0; i < reservationCount; i += 1) {
    // first, randomly generate the party size for this reservation
    const partySizeCalculator = Math.ceil(Math.random() * 6);
    let partySize = null;
    // reservations with parties of 2 and 4 are twice as likely as parties of 6 and 8
    if (partySizeCalculator < 3) {
      partySize = 2;
    } else if (partySizeCalculator < 5) {
      partySize = 4;
    } else if (partySizeCalculator < 6) {
      partySize = 6;
    } else {
      partySize = 8;
    }

    // second, generate the start time for this reservation
    const reservationTimeCalculator = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
    // reservations start anywhere between 5pm and 10pm
    // 7:30pm is the most common start time
    const reservationTime = moment().startOf('day').add(16 + (reservationTimeCalculator * 0.5), 'hours');

    // fianlly, insert this reservation into 'reservations' table in DB
    client.query(
      `
      INSERT INTO reservations
      VALUES (DEFAULT, $1, $2, $3, DEFAULT, DEFAULT)`,
      [restaurantId, reservationTime, partySize]
    );
  }
};

const SEED_NEW_CITY = (data) => {
  data.forEach((example) => {
    Promise.resolve(client.query(
      `
      INSERT 
      INTO restaurants 
      VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id`,
      [example.name, example.categories[0].title, example.location.address1 + ' ' + example.location.address2 + ' ' + example.location.address3, example.location.city, example.location.state, example.location.zip_code, example.url, example.image_url, example.display_phone, example.review_count, example.rating]
    ))
      .then((resultingID) => {
        fakeReservationGenerator(resultingID.rows[0].id);
      });
  });
};

/* use the following query in psql to check that DB is loaded properly:
  SELECT restaurants.name, reservations.time, reservations.party_size FROM reservations, restaurants WHERE reservations.restaurant_id = restaurants.id;
*/

module.exports = {
  client,
  SEED_NEW_CITY,
};
