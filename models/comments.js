const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comments = new Schema({
  content: String,
  name: String,
})

module.exports = mongoose.model('Comments', Comments)