var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  url: String,
  image: String,
  username: String,
  date: Date
});

module.exports = mongoose.model('Article', ArticleSchema);