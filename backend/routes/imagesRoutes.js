const express = require('express')
const api = express.Router()
const imagesController = require('../controllers/imagesController')
const upload = require('../middlewares/imagesMiddlewares')

const imagesSize = require('../middlewares/imageSize')


api.post("/images/:archivo",  upload.array('archivos'), imagesSize, imagesController.uploadNewImages)
api.get('/images', imagesController.getImages)
api.get('/image/download/:id', imagesController.getSpecificImage)

module.exports = api
