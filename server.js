var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Task = require('./api/models/todoListModel'),
	bodyParser = require('body-parser');

// instance connection url 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded(
	{ extended: true }));

app.use(bodyParser.json());

// routes
var routes = require('./api/routes/todoListRoutes');
routes(app); // register the apps

app.listen(port);

console.log('todo list RESTful API Server started on: ' + port);
