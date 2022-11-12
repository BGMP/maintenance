const express = require('express')
const api = express.Router()
const companiesController = require('../controllers/companiesController')

api.post('/new_company', companiesController.createCompany)
api.get('/companies', companiesController.getCompanies)

module.exports = api
