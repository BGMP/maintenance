const express = require('express')
const api = express.Router()
const maintenancesController = require('../controllers/maintenancesController')
const {authGetMaintenances} = require('../middlewares/maintenanceMiddlewares')

api.post('/maintenance', maintenancesController.createMaintenance)
api.get('/maintenance/:id', maintenancesController.getMaintenance)
api.delete('/maintenance/:id', maintenancesController.deleteMaintenance)
api.patch('/maintenance/:id', maintenancesController.updateMaintenance)
api.get('/maintenances', authGetMaintenances(["admin"]), maintenancesController.getMaintenances)

module.exports = api
