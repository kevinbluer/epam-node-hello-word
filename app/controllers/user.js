'use strict';

var passport = require('passport');

exports.getLogin = function(req, res) {

	res.render('login');
};

exports.getRegister = function(req, res) {

	res.render('register');
}

exports.register = function(req, res) {

	  res.redirect('/dashboard');
}

exports.isAuthenticated = function(req, res, next) {

	if (!req.isAuthenticated()) {
		res.redirect('/login');
	}

	next();
}