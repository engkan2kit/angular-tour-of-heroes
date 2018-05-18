var mongoose = require('mongoose');

var HeroSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('Hero', HeroSchema);