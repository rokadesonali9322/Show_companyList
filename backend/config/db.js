const mongoose = require('mongoose')

const connection = async () => {
  try {
    await mongoose.connect(process.env.mongodb, {
      connectTimeoutMS: 60000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    })
    console.log('Database connected succssfully')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connection
// jRUTpodXizIFisEc
