'use strict';

var Article = require('mongoose').model('Article');

module.exports = function(app) {

	var articles = require('../controllers/articles');

	app.get('/article/add', articles.add);
	app.get('/article/:id', articles.get);

	return app;
}

	