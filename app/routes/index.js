// Invoke 'strict' JavaScript mode
'use strict';

module.exports = function(app) {

	// Load the 'index' controller
	var index = require('../controllers/index');

	// Mount the 'index' controller's 'render' method
	app.get('/', index.home);
	app.get('/about', index.about);
};