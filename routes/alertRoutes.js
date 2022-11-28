const express = require('express')
const api = express.Router()
const alertController = require('../controllers/alertController')

api.post('/alert', alertController.createAlert)
api.get('/alert/:id', alertController.getAlert)
api.patch('/alert/:id', alertController.updateAlert)
api.delete('/alert/:id', alertController.deleteAlert)
api.get('/alerts', alertController.getAlerts)

module.exports = api
