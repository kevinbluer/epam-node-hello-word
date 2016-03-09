// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'render' controller method
exports.home = function(req, res) {

	res.locals.scripts.push('/js/home.js');
	res.render('home');
};

// Create a new 'render' controller method
exports.about = function(req, res) {
	
	res.locals.scripts.push('/js/about.js');
	res.render('about');
}