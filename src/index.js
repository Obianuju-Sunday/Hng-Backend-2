// const express = require("express");
// const ConnectDatabase = require("./utils/database");
// // const Todo = require("./models/todoModel");
// // const userRouter = require("./module/user/userRoute");

// const app = express();
// app.use(express.json());

// // localhost:3000/api/

// // app.use("/auth");
// app.use(express.json());

// async function todoHandler(req, res) {
// 	const requestBody = req.body;
// 	try {
// 		await Todo.create({
// 			todo: requestBody.todo,
// 		});
// 		res.status(201).json({ message: "Todo created" });
// 	} catch (error) {
// 		res.status(500).json({ error: "internal server error" });
// 	}
// }

// app.post("/todo", todoHandler);

// app.get("/todo", async (req, res) => {
// 	try {
// 		const todos = await Todo.find();
// 		res.status(200).json({ message: "data retrived", data: todos });
// 	} catch (error) {
// 		res.status(500).json({ error: "internal server error" });
// 	}
// });

// app.get("/todo/:id", async (req, res) => {
// 	const id = req.params.id;
// 	try {
// 		const todo = await Todo.findOne({
// 			_id: id,
// 		});
// 		res.json({ todo: todo });
// 	} catch (error) {
// 		res.status(404).json({ message: "todo not found" });
// 	}
// });

// app.put("/todo/:id", async (req, res) => {
// 	const id = req.params.id;
// 	try {
// 		await Todo.findOneAndUpdate(
// 			{ _id: id },
// 			{
// 				$set: {
// 					todo: req.body.todo,
// 				},
// 			}
// 		);
// 		res.status(201).json({ message: "todo updated successfully" });
// 	} catch (error) {
// 		res.status(500).json({ message: "internal server error" });
// 	}
// });

// app.delete("/id", async (req, res) => {
// 	try {
// 		await Todo.findOneAndDelete({ _id: req.params.id });
// 		res.status(202).json({ message: "todo deleted" });
// 	} catch (error) {
// 		res.status(500).json({ message: "internal server error" });
// 	}
// });

// app.listen(3000, () => {
// 	ConnectDatabase();
// 	console.log("app started");
// });


////////////////////////////////////////////

require('dotenv').config()


const express = require('express');
const mongoose = require('mongoose');
const mongoData = process.env.DATABASE_URL;
mongoose.connect(mongoData);
const database = mongoose.connection;

database.on('error' ,(error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected'); 
})

const app = express();

app.use(express.json());
const routes = require('./routes/routes.js');
 
app.use('/api', routes);

app.listen(3000, () =>{
    console.log(`Server started at ${3000}`)
})
