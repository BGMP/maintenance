const express = require('express')
const api = express.Router()
const companiesController = require('../controllers/companiesController')
const {authGetCompanies} = require('../middlewares/companyMiddlewares')
const {authPostCompanies} = require('../middlewares/companyMiddlewares')
const {authDeletCompanies} = require('../middlewares/companyMiddlewares')
const {authUpdateCompanies} = require('../middlewares/companyMiddlewares')
const {authGetsCompanies} = require('../middlewares/companyMiddlewares')


api.post('/company', authPostCompanies(["admin"]), companiesController.createCompany)
api.get('/company/:id', authGetCompanies(["admin"]), companiesController.getCompany)
api.delete("/company/:id", authDeletCompanies(["admin"]), companiesController.deleteCompany)
api.patch("/company/:id", authUpdateCompanies(["admin"]), companiesController.updateCompany)
api.get('/companies', authGetsCompanies(["admin"]), companiesController.getCompanies)

module.exports = api
