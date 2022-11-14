const express = require('express')
const api = express.Router()
const maintenancesController = require('../controllers/maintenancesController')

api.post('/maintenance', maintenancesController.createMaintenance)
api.get('/maintenance/:id', maintenancesController.getMaintenance)
api.delete('/maintenance/:id', maintenancesController.deleteMaintenance)
api.patch('/maintenance/:id', maintenancesController.updateMaintenance)
api.get('/maintenances', maintenancesController.getMaintenances)

module.exports = api
