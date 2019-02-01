const Recipe = require('../models/Recipes')
const seedData = require('./seedData.json')

// const Comment = require('../models/Comments')
// const seedComment = require('./seedComment.json')

Recipe.remove({}).then(() => {
  return Recipe.collection.insert(seedData)
}).then(() => {
  process.exit()
})
