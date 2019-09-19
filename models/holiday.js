let mongoose = require('mongoose');
const Object_Id = mongoose.Schema.Types.ObjectId;

let holidaySchema = new mongoose.Schema ({
    place: {
        type: String,
        required: true
    },
    date: {
        type: String, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    user: {
        type: Object_Id,
        ref: 'User'
    }
})

module.exports = mongoose.model('Holiday', holidaySchema)