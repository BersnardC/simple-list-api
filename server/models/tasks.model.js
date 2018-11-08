const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaksSchema = new Schema({
	name: { type: String, required: true},
	priority: { type: Number, required: true},
	dueDate: { type: Date, required: true},
	createdat: {type: Date, default: Date.now},
	updatepAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Tasks', TaksSchema);
