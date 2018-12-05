let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let router = require('./router');
let app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/react-app');

var db = mongoose.connection;

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World With Express'));

app.use('/api', router);

app.listen(port, function() {
	console.log("Running react-rest-api on port: " + port);
});