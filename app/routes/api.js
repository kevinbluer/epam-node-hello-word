'use strict'

var User = require('mongoose').model('User'),
	Article = require('mongoose').model('Article')

module.exports = function(app) {

	app.get('/api/articles', function(req, res, next) {

		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");

		Article.find({}, null, {sort: {date: -1}}, function (err,data) {
			res.json(data);
		});

	});

	app.get('/api/articles/:id', function(req, res, next) {

		Article.findById(req.params.id, function(err, article) {
			if (!err) {
				res.json(article);
			} else {
				res.send(404, 'File not Found.');
			}
		});
		
	});

	app.post('/api/articles', function(req, res, next) {

		var article = new Article(req.body);

		article.save(function(err, article) {
			res.redirect('/article/' + article.id);
		});

	});

	app.post('/api/register', function(req, res, next) {

		// IMPORTANT - WE SHOULD NEVER SAVE OUR PASSWORD IN CLEAR TEXT

		var user = new User(req.body);
		user.save(function(err, user) {
			if (err) {
				res.redirect('/register?status=fail');
			}

			res.redirect('/login');
		});	
	});

};