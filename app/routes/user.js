'use strict';

var passport = require('passport');

// PENDING FURTHER REFACTORING

module.exports = function(app) {

	app.get('/login', function(req, res) {
	  res.render('login');
	})

	app.post('/login',
	  passport.authenticate('local', { 
	    successRedirect: '/dashboard',
	    failureRedirect: '/login' 
	  })
	);

	// respond to the get request with the register page
	app.get('/register', function(req, res) {

	  res.render('register');
	});

	// handle the posted registration data
	app.post('/register', function(req, res) {

	  // get the data out of the request (req) object
	  // store the user in memory here

	  res.redirect('/dashboard');
	});

	return app;
}