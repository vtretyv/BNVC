const postgres = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/tableopen';

const client = new postgres.Client({
	connectionString: connectionString,
	// ssl: true
});

client.connect();


client.query("DROP TABLE chadam");
client.query("CREATE TABLE IF NOT EXISTS chadam (firstname varchar(64), lastname varchar(64))");
client.query("INSERT INTO chadam (firstname, lastname) values($1, $2)", ['who', 'dat']);
client.query("INSERT INTO chadam (firstname, lastname) values($1, $2)", ['what is', 'going on']);

// var query = await client.query("SELECT firstname, lastname FROM chadam  ORDER BY lastname, firstname");

// query.on("row", function (row, result) {
//     result.addRow(row);
// });

// query.on("end", function (result) {
//     console.log(JSON.stringify(result.rows, null, "    "));
//     client.end();
// });

// var res = client.query("SELECT * FROM chadam");
// console.log(res);
// client.end();

Promise.resolve(client.query("SELECT * FROM chadam"))

.then((results) => {
	console.log(results.rows);
	client.end();
});