const express = require('express')
const api = express.Router()
const imagesController = require('../controllers/imagesController')
const upload = require('../middlewares/imagesMiddlewares')

const imagesSize = require('../middlewares/imageSize')

api.post("/registry/upload/:archivo",  upload.array('archivos'), imagesSize, imagesController.uploadNewFile)

module.exports = api