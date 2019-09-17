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
    userId: {
        type: String,
        required: true
    },
    todo: {
        type: Array,
    }
})

module.exports = mongoose.model('Holiday', holidaySchema)