const express = require('express')
const routes = express.Router()
const { getCompanyList, addcompanyname } = require('../controller/companyCont')

routes.get('/', getCompanyList)
routes.post('/', addcompanyname)

module.exports = routes
