const Recipe = require('../models/Recipes')
const seedData = require('./seedData.json')

Recipe.remove({}).then(() => {
  return Recipe.collection.insert(seedData)
}).then(() => {
  process.exit()
})

//Seed data to test - pull from GAphy lab
// const mongoose = require('mongoose')
// mongoose.Promise = Promise