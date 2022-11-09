const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MaintainanceSchema = new Schema({
    target: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('maintainance', MaintainanceSchema)
