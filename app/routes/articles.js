'use strict';

var Article = require('mongoose').model('Article');

module.exports = function(app) {

	var articles = require('../controllers/articles');
	var user = require('../controllers/user');

	app.get('/article/add', user.isAuthenticated, articles.add);
	app.get('/article/:id', articles.get);

	return app;
}

	