const mongoose = require('mongoose');

var todo = new mongoose.Schema({
  task: String,
  description: String,
  started: Date,
  finished: Date,
  complete: Boolean
})

module.exports = mongoose.model('Todo',todo)
