'use strict';

var passport = require('passport');

// PENDING SOME MORE REFACTOR

module.exports = function(app) {

	var user = require('../controllers/user');

	app.get('/login', user.getLogin);
	app.post('/login', passport.authenticate('local', { 
	    successRedirect: '/dashboard',
	    failureRedirect: '/login' 
	  }));
	app.get('/register', user.getRegister);
	app.post('/login', user.register);
}