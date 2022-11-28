const express = require('express')
const api = express.Router()
const registryController = require('../controllers/registryController')

api.post('/registry', registryController.createRegistry)
api.get('/registry/:id', registryController.getRegistry)
api.patch('/registry/:id', registryController.updateRegistry)
api.delete('/registry/:id', registryController.deleteRegistry)
api.get('/registries/:maintenance', registryController.getRegistries)

module.exports = api
