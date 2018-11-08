const Tasks = require('../models/tasks.model');
const tasksCtrl = {};

tasksCtrl.getTasks = async (req, res) => {
	const tasks = await Tasks.find()
	console.log('Get tasks')
	res.json(tasks);
};

tasksCtrl.createTask = async (req, res) => {
	try {
    	const task = new Tasks(req.body)
    	await task.save();
    	res.json({'status':'Task saved '})
    }
    catch(err) {
        res.send('500: Internal Server Error', 500);
    }
	
}

tasksCtrl.getTask = async (req, res) => {
	console.log(req.params)
	const task = await Tasks.findById(req.params.id)
	res.json(task) 
}

tasksCtrl.updateTask = function (req, res) {
	const { id } = req.params;
	const task = {
		name: req.body.name,
		position: req.body.priority,
		office: req.body.due_date,
	}
	//Tasks.findByIdAndUpdate(id, )
}
tasksCtrl.deleteTask = function () {
	console.log('en delete')
}

module.exports = tasksCtrl;
