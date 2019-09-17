const mongoose = require('mongoose');


const holidaySchema = new mongooseSchema ({
    place: {
        type: String,
        required: true
    },
    date: {
        type: Number, 
        required: true
    },
    holidayName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongooseSchema('Holiday', holidaySchema)