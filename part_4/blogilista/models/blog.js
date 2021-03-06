const mongoose = require('mongoose')
const config = require('../utils/config')
const logger = require('../utils/logger')
const uniqueValidator = require('mongoose-unique-validator')

const blogSchema = new mongoose.Schema({
	title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.plugin(uniqueValidator)

blogSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

module.exports = mongoose.model('Blog', blogSchema)
