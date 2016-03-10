'use strict';

var Article = require('mongoose').model('Article');
var ObjectId = require('mongoose').Types.ObjectId;
var User = require('mongoose').model("User");

exports.getArticles = function(req, res) {
	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	Article.find({}, null, {sort: {date: -1}}, function (err,data) {
		res.json(data);
	});

}

exports.getArticleById = function(req, res) {

	Article.findById(req.params.id, function(err, article) {
		if (!err) {
			res.json(article);
		} else {
			res.send(404, 'File not Found.');
		}
	});

}

exports.createArticle = function(req, res) {

	var article = new Article(req.body);

	article.save(function(err, article) {
		res.redirect('/article/' + article.id);
	});

}

exports.register = function(req, res) {

	// IMPORTANT - WE SHOULD NEVER SAVE OUR PASSWORD IN CLEAR TEXT

	var user = new User(req.body);
	user.save(function(err, user) {
		if (err) {
			console.log(err);
			res.redirect('/register?status=fail');
		}

		console.log('user created');
		res.redirect('/login');
	});
}