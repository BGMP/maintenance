const express = require('express')
const api = express.Router()
const registryController = require('../controllers/registryController')
const {authPostRegistry} = require("../middlewares/registryMiddlewares");
const {authGetRegistry} = require("../middlewares/registryMiddlewares");
const {authPatchRegistry} = require("../middlewares/registryMiddlewares");
const {authDeleteRegistry} = require("../middlewares/registryMiddlewares");
const {authGetRegistries} = require("../middlewares/registryMiddlewares");

api.post('/registry', authPostRegistry(["admin", "company"]), registryController.createRegistry)
api.get('/registry/:id', authGetRegistry(["admin", "company", "vecino"]),registryController.getRegistry)
api.patch('/registry/:id',authPatchRegistry(["admin", "company"]), registryController.updateRegistry)
api.delete('/registry/:id',authDeleteRegistry(["admin", "company"]), registryController.deleteRegistry)
api.get('/registries/:maintenance',authGetRegistries(["admin", "company", "vecino"]), registryController.getRegistries)

module.exports = api
