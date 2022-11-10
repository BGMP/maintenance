const express = require('express')
const api = express.Router()
const companyController = require('../controllers/companyController')

api.post('/new_company', companyController.createCompany)
api.get('/companies', companyController.getCompanies)

module.exports = api
