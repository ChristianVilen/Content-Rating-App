const mongoose = require('mongoose')

//const url = process.env.DB_CONNECTION
const url = 'mongodb://root:root@mongo:27017'

module.exports = {
  attach() {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => console.log('Linked to DB'))
      .catch((err) => console.error(err))
  },
}
