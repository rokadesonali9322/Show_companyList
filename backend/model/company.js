const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
  companyname: {
    type: String,
    required: [true, 'company name is required'],
  },
  industry: {
    type: String,
    required: [true, 'Industry is required'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  headquators: {
    type: String,
    required: [true, 'Headquators is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
})

module.exports = mongoose.model('company', companySchema)
