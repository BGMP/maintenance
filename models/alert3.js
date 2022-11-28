const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Alert3Schema = new Schema({
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
    }
})

module.exports = mongoose.model('alert', Alert3Schema)
