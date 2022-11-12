const express = require('express')
const api = express.Router()
const maintenancesController = require('../controllers/maintenancesController')

api.post('/new_maintenance', maintenancesController.createMaintenance)
api.get('/maintenances', maintenancesController.getMaintenances)

module.exports = api
