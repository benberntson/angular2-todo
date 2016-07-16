const mongoose = require('mongoose');

var todo = new mongoose.Schema({
    id: Number,
    task: String,
    description: String,
    started: Number,
    finished: Number
})

module.exports = mongoose.model('todo',todo)