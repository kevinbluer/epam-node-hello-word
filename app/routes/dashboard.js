'use strict';

module.exports = function(app) {

	var dashboard = require('../controllers/dashboard');
	var user = require('../controllers/user');

	app.get('/dashboard', user.isAuthenticated, dashboard.get);

	return app;
}