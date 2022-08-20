const express = require('express');
const { GetAllTasks, GetTask, CreateTask, UpdateTask, DeleteTask } = require('../controllers/tasks');

const router = express.Router();

router.route('/').get(GetAllTasks).post(CreateTask);
router.route('/:id').get(GetTask).patch(UpdateTask).delete(DeleteTask);


module.exports = router;