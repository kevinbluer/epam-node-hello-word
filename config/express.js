// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var express = require('express'),
	config = require('./config'),
	exphbs = require('express-handlebars'),
	session = require('express-session'),
	passport = require('passport'),
	bodyParser = require('body-parser');

// Define the Express configuration method
module.exports = function(db) {

	// create the express app
	var app = express();

	// determine project root (pending better solution)
	var path = require('path');
	var appDir = path.dirname(require.main.filename);

	// setup handlebars
	var hbs = exphbs.create({defaultLayout: appDir + '/app/views/layouts/main'});
	app.engine('handlebars', hbs.engine);	
	app.set('view engine', 'handlebars');
	app.set('views', appDir + '/app/views');

	// express middleware that parser the key-value pairs sent in the request body in the format of our choosing (e.g. json)
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use(session({ secret: 'anything' }));

	// setup passport
	app.use(passport.initialize());
	app.use(passport.session());

	// setup our public directory (which will serve any file stored in the 'public' directory)
	app.use(express.static('public'));

	app.use(function (req, res, next) {
	  res.locals.scripts = [];
	  next();
	});

	// loading the routes
	require('../app/routes/index.js')(app);
	require('../app/routes/api')(app);
	require('../app/routes/articles')(app);
	require('../app/routes/user')(app);
	require('../app/routes/dashboard')(app);

	return app;

};