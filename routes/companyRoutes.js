const express = require('express')
const api = express.Router()
const companiesController = require('../controllers/companiesController')

api.post('/company', companiesController.createCompany)
api.get('/company/:id', companiesController.getCompany)
api.delete("/company/:id", companiesController.deleteCompany)
api.patch("/company/:id", companiesController.updateCompany)
api.get('/companies', companiesController.getCompanies)

module.exports = api
