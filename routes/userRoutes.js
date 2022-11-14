const express = require('express')
const api = express.Router()
const usersController = require('../controllers/usersController')

api.post('/user', usersController.createUser)
api.get('/user/:id', usersController.getUser)
api.patch('/user/:id', usersController.updateUser)
api.delete('/user/:id', usersController.deleteUser)
api.get('/users', usersController.getUsers)

module.exports = api
