const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema ({
    user: {
        type: Object_id,
        ref: 'User'
    },
    todo: Array

})

module.exports = mongoose.model('Todo', todoSchema);