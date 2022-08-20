const Task = require('../models/task');

async function GetAllTasks(req, res) {
    try {
        const tasks = await Task.find({});

        const response = tasks.map((task) => {
            return {
                _id: task._id,
                title: task.Title,
                completed: task.Completed
            };
        });

        res.status(200).json({ tasks: response });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

async function GetTask(req, res) {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOne({ _id: taskId });

        if (!task) {
            res.status(404).json({ msg: `No task found with id: ${taskId}` });
            return;
        }

        const response = {
            _id: task._id,
            title: task.Title,
            completed: task.Completed
        };

        res.status(200).json({ task: response });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

async function CreateTask(req, res) {
    const { title, completed } = req.body;

    try {
        const task = await Task.create({
            Title: title,
            Completed: completed
        });

        const response = {
            _id: task._id,
            title: task.Title,
            completed: task.Completed
        };

        res.status(200).json({ task: response });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

async function UpdateTask(req, res) {
    try {
        const { id: taskId } = req.params;
        const { title, completed } = req.body;
        const task = await Task.findOneAndUpdate({ _id: taskId }, {
            Title: title,
            Completed: completed
        }, {
            new: true,
            runValidators: true
        });

        if (!task) {
            res.status(404).json({ msg: `No task found with id: ${taskId}` });
            return;
        }

        const response = {
            _id: task._id,
            title: task.Title,
            completed: task.Completed
        };

        res.status(200).json({ task: response });

    } catch (error) {
        res.status(500).json({ msg: error });
    }

}

async function DeleteTask(req, res) {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskId });

        if (!task) {
            res.status(404).json({ msg: `No task found with id: ${taskId}` });
            return;
        }

        const response = {
            _id: task._id,
            title: task.Title,
            completed: task.Completed
        };

        res.status(200).json({ task: response });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports = {
    GetAllTasks,
    GetTask,
    CreateTask,
    UpdateTask,
    DeleteTask
};