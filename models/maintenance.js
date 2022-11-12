const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MaintenanceSchema = new Schema({
    target: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
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
    },
    registry: [{
        comment: {
            type: String,
            required: true
        },
        files: [{
            type: String,
            required: false
        }]
    }]
})

module.exports = mongoose.model('maintenance', MaintenanceSchema)
