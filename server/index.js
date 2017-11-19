const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));













app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) })
