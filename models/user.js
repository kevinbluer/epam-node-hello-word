var mongoose = require('mongoose');

// passport = require('passport');
// bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);