const company = require('./../model/company')
const CompanyModal = require('./../model/company')

// get all compnay list

exports.getCompanyList = async (req, res) => {
  try {
    const company = await CompanyModal.find()
    res.status(200).json(company)
  } catch (error) {
    console.log(error)
  }
}

// add the company details

exports.addcompanyname = async (req, res) => {
  try {
    const Company = CompanyModal(req.body)
    res.status(200).send(await Company.save())
  } catch (error) {
    console.log(error)
  }
}
