const Task = require('../models/task');

function GetAllTasks(req, res) {
    res.end('Get All Tasks!!!');
}

function GetTask(req, res) {
    res.end('Get Task!!!');
}

async function CreateTask(req, res) {
    const { title, completed } = req.body;
    const task = Task.create({
        Title: title,
        Completed: completed
    });

    res.status(201).json({ task });
}

function UpdateTask(req, res) {
    res.end('Update Task!!!');
}

function DeleteTask(req, res) {
    res.end('Delete Task!!!');
}

module.exports = {
    GetAllTasks,
    GetTask,
    CreateTask,
    UpdateTask,
    DeleteTask
};