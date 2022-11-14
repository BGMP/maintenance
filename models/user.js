const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
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
    admin: {
        type: Boolean,
        required: false,
        default: false
    },
    company: {
        type: Boolean,
        required: false,
        default: false
    }
})

module.exports = mongoose.model('user', UserSchema)
