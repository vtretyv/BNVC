const postgres = require('pg');
const sampleData = require('../sampleData/sampleData.js');

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/tableopen';

const client = new postgres.Client({
	connectionString: connectionString,
	// ssl: true
});

client.connect();


client.query("DROP TABLE restaurants");
client.query(`CREATE TABLE IF NOT EXISTS restaurants (
	id SERIAL PRIMARY KEY,
	name TEXT,
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

const SEED_SAMPLE_DATA = () => {
	sampleData.massagedDataYelp.businesses.forEach(example => {
		client.query(`
			INSERT 
			INTO restaurants 
			VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`, [example.name, example.categories[0].title, example.location.address1 + ' ' + example.location.address2 + ' ' + example.location.address3, example.location.city, example.location.state, example.location.zip_code, example.url, example.image_url, example.display_phone, example.review_count, example.rating]
		);
	});
};

// SEED_SAMPLE_DATA();


Promise.resolve(client.query("SELECT * FROM restaurants"))

	.then((results) => {
		console.log(results.rows);
		client.end();
	})
	.catch((error) => {
    console.log(`ERROR FROM DB QUERY: ${error}`);
    client.end();
	});