const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/recipes')

mongoose.Promise = Promise

module.exports = mongoose