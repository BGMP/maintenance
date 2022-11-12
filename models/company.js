const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rut: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('company', CompanySchema)
