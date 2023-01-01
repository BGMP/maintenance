const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fileSchema = new Schema({
    registry: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Registry',
        required: true
    },
    url:{
        type: 'string',
        required: true
    },
    name:{
        type: 'string',
        required: true
    },
    mimeType:{
        type: 'string',
        required: true
    }
});

module.exports = mongoose.model('file', fileSchema);
