var mongoose = require('mongoose');

// passport = require('passport');
// bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true }
});

UserSchema.method('validPassword', function(password, callback) {
  
    if (password == this.password) {
      return true;
    } else {
      return false;
    }
});

module.exports = mongoose.model('User', UserSchema);