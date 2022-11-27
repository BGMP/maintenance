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
    type_user: {
        type: Number,
        required: true,
        default: 3,
        size: 1
    }
    /*
    * admin: 1
    * company: 2
    * vecino: 3
    */

})

module.exports = mongoose.model('user', UserSchema)
