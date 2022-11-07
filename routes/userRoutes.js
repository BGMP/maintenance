const express = require('express')
const api = express.Router()
const usersController = require('../controllers/usersController')

api.post('/new_user', usersController.createUser)
api.get('/users', usersController.getUsers)

module.exports = api
