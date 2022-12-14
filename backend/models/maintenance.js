const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MaintenanceSchema = new Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company',
        required: true
    },
    target: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 60
    },
    type: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 40
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 512
    },
    start_date: {
        type: Date,
        required: true,
        max: '2030-01-01'
    },
    end_date: {
        type: Date,
        required: true,
        max: '2030-01-01'
    }
})

module.exports = mongoose.model('maintenance', MaintenanceSchema)
