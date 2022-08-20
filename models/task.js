const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, 'Title can not be empty!'],
        trim: true,
        maxlength: [64, 'Title can not be greater than 64 characters!']
    },
    Completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema); 