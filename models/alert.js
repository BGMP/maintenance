const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AlertSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        maxlength: 1024
    },
    type: {
        type: String,
        enum: ['admin', 'company', 'vecino']
    }
})

module.exports = mongoose.model('alert', AlertSchema)
