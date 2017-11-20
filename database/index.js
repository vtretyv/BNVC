const postgres = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/tableopen';

const db = new postgres.Client(connectionString);
db.connect();

const query = db.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { db.end(); });