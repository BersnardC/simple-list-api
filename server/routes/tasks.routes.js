const express = require('express');
const router = express.Router();
const tasksCtrl = require('../controllers/tasks.controller');

//Routes 

router.get('/',(req,res) => {
	//res.send('Hello World!');
	res.json({
		status: 'API Ready.'
	})
});
// Get all Tasks --> GET
router.get('/tasks',tasksCtrl.getTasks);

// //Get single Task by id --> GET
router.get('/tasks/:id', tasksCtrl.getTask);

// //Create a Task --> POST
router.post('/tasks/create', tasksCtrl.createTask);

// // Update a Task by id--> POST
// router.post('/task/update', tasksCtrl.Task);

// // delete a Task by id
//router.get('/tasks/destroy/:id', tasksCtrl.deleteTask);

//export routes
module.exports = router;
