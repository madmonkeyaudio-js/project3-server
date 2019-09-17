let mongoose = require('mongoose');
const Object_Id = mongoose.Schema.Types.ObjectId;

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
        type: Object_Id,
        ref: 'User'
    },
    todo: {
        type: Object_Id,
        ref: 'Todo'
    }
})

module.exports = mongoose.model('Holiday', holidaySchema)