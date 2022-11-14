const express = require('express')
const api = express.Router()
const usersController = require('../controllers/usersController')

api.post('/new_user', usersController.createUser)
api.get('/users/user_id/:id', usersController.getUser)
api.patch('/user_update/:id', usersController.updateUser)
api.delete('/del_user/:id', usersController.deleteUser)
api.get('/users', usersController.getUsers)

module.exports = api
