const Recipe = require('../models/recipes')
const seedData = require('./seedData.json')

// const Comment = require('../models/Comments')
// const seedComment = require('./seedComment.json')

Recipe.remove({}).then(() => {
  return Recipe.collection.insert(seedData)
}).then(() => {
  process.exit()
})

// Comment.remove({}).then(() => {
//   return Comment.collection.insert(seedComment)
// }).then(() => {
// process.exit()
// })

//Seed data to test - pull from GAphy lab
// const mongoose = require('mongoose')
// mongoose.Promise = Promise