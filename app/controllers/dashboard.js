'use strict';

exports.get = function(req, res) {
	
	res.render('dashboard', {
    	stuff: [{
		    greeting: "Hello",
		    subject: "World!"
		}],
    user: req.user
    });

}