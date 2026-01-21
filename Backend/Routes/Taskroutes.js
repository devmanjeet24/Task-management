const express = require("express");
const router = express.Router();
const TaskController = require("../Controller/Taskcontroller.js");


router.post('/', TaskController.CreateTask);
router.get('/', TaskController.GetTask);
router.put('/:id', TaskController.UpdateTask);
router.delete('/:id', TaskController.deleteTask);

module.exports = router;