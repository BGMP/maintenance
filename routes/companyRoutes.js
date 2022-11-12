const express = require('express')
const api = express.Router()
const companiesController = require('../controllers/companiesController')

api.post('/new_company', companiesController.createCompany)
api.get('/companies', companiesController.getCompanies)
api.delete("/del_company/:id", companiesController.companyDelete)
module.exports = api
