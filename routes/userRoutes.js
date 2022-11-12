const express = require('express')
const api = express.Router()
const usersController = require('../controllers/usersController')

api.post('/new_user', usersController.createUser)
api.get('/users', usersController.getUsers)
api.delete('/del_user/:id', usersController.userDelete)
api.get('/users/user_id/:id', usersController.userDetails)
api.patch('/user_update/:id', usersController.userUpdate)

module.exports = api
