var mongoose = require('mongoose');
var crypto = require('crypto');

// passport = require('passport');
// bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String },
  salt: { type: String }
});

// UserSchema.method('validPassword', function(password, callback) {
//     if (password == this.password) {
//       return true;
//     } else {
//       return false;
//     }
// });

// ^^^^^
// NOOO!

// Use a pre-save middleware to hash the password
UserSchema.pre('save', function(next) {
	if (this.password) {
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}

	next();
});

// Create an instance method for hashing a password
UserSchema.methods.hashPassword = function(password) {
	return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

// Create an instance method for authenticating user
UserSchema.methods.validPassword = function(password) {
	return this.password === this.hashPassword(password);
};


module.exports = mongoose.model('User', UserSchema);