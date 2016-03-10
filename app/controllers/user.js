'use strict';

var passport = require('passport');
var User = require('mongoose').model('User');

exports.getLogin = function(req, res) {

	res.render('login');
};

exports.getRegister = function(req, res) {

	res.render('register');
}

exports.isAuthenticated = function(req, res, next) {

	if (!req.isAuthenticated()) {
		res.redirect('/login');
	} else {
		next();
	}
}