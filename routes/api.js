var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var _ = require('underscore');

var Article = mongoose.model('Article');
var User = mongoose.model('User');

// note that typically data would NOT be loaded from the filesystem in this manner :)

router.get('/articles', function(req, res, next) {

	res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  Article.find({}, null, {sort: {date: -1}}, function (err,data) {
    res.json(data);
  });

});

router.get('/articles/:id', function(req, res, next) {

	Article.findById(req.params.id, function(err, article) {
		if (!err) {
			res.json(article);
		} else {
			res.send(404, 'File not Found.');
		}
	});
});

router.post('/register', function(req, res, next) {

	// IMPORTANT - WE SHOULD NEVER SAVE OUR PASSWORD IN CLEAR TEXT

	var user = new User(req.body);
	user.save(function(err, user) {
		if (err) {
			res.redirect('/register?status=fail');
		}

		res.redirect('/login');
	});	
});

module.exports = router;