const express = require('express')
const api = express.Router()
const alertController = require('../controllers/alertController')
const {authPostAlert} = require('../middlewares/alertMiddlewares');
const {authGetAlert} = require('../middlewares/alertMiddlewares');
const {authPatchAlert} = require('../middlewares/alertMiddlewares');
const {authDeleteAlert} = require('../middlewares/alertMiddlewares');
const {authGetAlerts} = require('../middlewares/alertMiddlewares');

api.post('/alert', authPostAlert(["admin", "company"]), alertController.createAlert)
api.get('/alert/:id', authGetAlert(["admin", "company"]), alertController.getAlert)
api.patch('/alert/:id', authPatchAlert(["admin", "company"]), alertController.updateAlert)
api.delete('/alert/:id', authDeleteAlert(["admin", "company"]), alertController.deleteAlert)
api.get('/alerts', authGetAlerts(["admin", "company"]), alertController.getAlerts)

module.exports = api
