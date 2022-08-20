const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    Title: String,
    Completed: Boolean
});

module.exports = mongoose.model('Task', TaskSchema); 