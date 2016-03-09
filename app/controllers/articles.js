'use strict';

var Article = require('mongoose').model('Article');
var ObjectId = require('mongoose').Types.ObjectId;

exports.add = function(req, res) {
	
	res.render('article-add');
}

exports.get = function(req, res) {

	Article.findOne({_id: new ObjectId(req.params.id) }, function(err, article) {
		res.render('article', article);
	});

}