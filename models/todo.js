const mongoose = require('mongoose');
const Object_Id = mongoose.Schema.Types.ObjectId;

const todoSchema = new mongoose.Schema ({
    todoItem: String,
    user: {
        type: Object_Id,
        ref: 'User'
    },
    holiday: {
        type: Object_Id,
        ref: 'Holiday'
    }
})

module.exports = mongoose.model('Todo', todoSchema);