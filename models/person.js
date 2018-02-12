const mongoose = require('mongoose')
const creds = require('../creds')
const url = `mongodb://${creds.name}:${creds.pass}@ds223578.mlab.com:23578/atte-fullstack`

mongoose.connect(url)
mongoose.Promise = global.Promise

const Person = mongoose.model('Person', {
  name: String,
  number: String
})

module.exports = Person
