const express = require('express')
const api = express.Router()
const alert3Controller = require('../controllers/alert3Controller')

api.post('/alert', alert3Controller.createAlert3)
api.get('/alert/:id', alert3Controller.getAlert3)
api.patch('/alert/:id', alert3Controller.updateAlert3)
api.delete('/alert/:id', alert3Controller.deleteAlert3)
api.get('/alerts', alert3Controller.getAlerts3)

module.exports = api
