const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RegistrySchema = new Schema({
    maintenance: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Maintenance',
        required: true
    },

    comment: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 512

    },
    files: [{
        type: String,
        required: false
    }]
})

module.exports = mongoose.model('registry', RegistrySchema)