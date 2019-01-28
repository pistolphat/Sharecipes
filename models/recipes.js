const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Recipes = new Schema({
  title: String,
  Ingredients: String,
  instructions: String
})

module.exports = mongoose.model('Recipes', Recipes)