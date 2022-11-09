const express = require('express')
const api = express.Router()
const maintainanceController = require('../controllers/maintainanceController')

api.post('/new_maintainance', maintainanceController.createMaintainance)
api.get('/maintainances', maintainanceController.getMaintainances)

module.exports = api
