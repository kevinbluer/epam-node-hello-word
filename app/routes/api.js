'use strict'

var User = require('mongoose').model('User'),
	Article = require('mongoose').model('Article')

module.exports = function(app) {

	var api = require('../controllers/api');

	app.get('/api/articles', api.getArticles);
	app.get('/api/articles/:id', api.getArticleById);
	app.post('/api/articles', api.createArticle);		
	app.post('/api/register', api.register);

	return app;

};