const express = require('express')
const api = express.Router()
const maintenancesController = require('../controllers/maintenancesController')

api.post('/new_maintenance', maintenancesController.createMaintenance)
api.get('/maintenances', maintenancesController.getMaintenances)
api.delete('/maintenance_delete/:id', maintenancesController.maintenancedelete)
api.get('/maintenance/maintenance_id/:id', maintenancesController.maintenancedetails)
api.patch('/maintenance_update/:id', maintenancesController.maintenanceupdate)

module.exports = api
