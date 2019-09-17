const mongoose = require('mongoose');
const Object_Id = mongoose.Schema.Types.ObjectId;

const todoSchema = new mongoose.Schema ({
    user: {
        type: Object_Id,
        ref: 'User'
    },
    plan: [String]

})

module.exports = mongoose.model('Todo', todoSchema);