const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
	{
		name: { 
			type: String,
			required: true
		},
		email: { 
			type: String, 
			unique: true, 
			required: true 
		},
		// password: { type: String },
	},
	{
		timestamps: true,
	}
);

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
