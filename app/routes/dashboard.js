'use strict';

// PENDING FURTHER REFACTORING

module.exports = function(app) {

	// respond to the get request with dashboard page 
	// pass in some data into the template (note this will be rendered server-side)
	app.get('/dashboard', function (req, res) {
	    console.log(req.user);
	    res.render('dashboard', {
	    	stuff: [{
			    greeting: "Hello",
			    subject: "World!"
			}],
	    user: req.user
	    });
	});

	return app;

}