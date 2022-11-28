const express = require('express')
const api = express.Router()
const maintenancesController = require('../controllers/maintenancesController')
const {
    authCreateMaintenance,
    authGetMaintenance,
    authUpdateMaintenance,
    authDeleteMaintenance,
    authGetMaintenances
} = require('../middlewares/maintenanceMiddlewares')

api.post('/maintenance', authCreateMaintenance(["admin"]), maintenancesController.createMaintenance)
api.get('/maintenance/:id', authGetMaintenance(["admin", "company"]), maintenancesController.getMaintenance)
api.delete('/maintenance/:id', authDeleteMaintenance(["admin"]), maintenancesController.deleteMaintenance)
api.patch('/maintenance/:id', authUpdateMaintenance(["admin"]), maintenancesController.updateMaintenance)
api.get('/maintenances', authGetMaintenances(["admin", "company"]), maintenancesController.getMaintenances)

module.exports = api
