let mongoose = require('mongoose');

let holidaySchema = new mongoose.Schema ({
    place: {
        type: String,
        required: true
    },
    date: {
        type: Number, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    user: {
        type: Object_id,
        ref: 'User'
    },
    todo: {
        type: Object_Id,
        ref: 'Todo'
    }
})

module.exports = mongoose.model('Holiday', holidaySchema)