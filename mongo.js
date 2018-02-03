const mongoose = require('mongoose')

const url = 'mongodb://atte:kukkakaali@ds223578.mlab.com:23578/atte-fullstack'

const args = process.argv

mongoose.connect(url)
mongoose.Promise = global.Promise

const Person = mongoose.model('Person', {
  name: String,
  number: String
})

const person = new Person({
  name: args[2],
  number: args[3]
})

person
  .save()
  .then(response => {
    console.log("person saved")
    mongoose.connection.close()
  })
