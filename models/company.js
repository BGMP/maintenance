const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CompanySchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50

    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
    rut: {
        type: String,
        required: true,
        unique: true,
        minlength: 11,//1.234.567-8
        maxlength: 12//12.345.678-9
    },
    area: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    },
    phone: {
        type: String,
        required: true,
        minlength: 9,
        match: [/^[9][0-9]{1,8}$/]
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 60
    },
    contact: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 40
    }
})

module.exports = mongoose.model('company', CompanySchema)
