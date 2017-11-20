// const { Client } = require('pg');
// const client = new Client();

// client.connect();

// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message); // Hello World!
//   client.end();
// });

const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });