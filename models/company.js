const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CompanySchema = new Schema({
    name: {
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
    direction:  {
        type: String,
        required: true
    },
    contact_company:  {
        type: String,
        required: true
    },
    rut_company:  {
        type: String,
        required: true
    },
    email:  {
    type: String,
        required: true
}
})

module.exports = mongoose.model('company', CompanySchema)
