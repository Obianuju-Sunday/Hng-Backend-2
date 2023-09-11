const mongoose = require("mongoose");

async function ConnectDatabase() {
	try {
		await mongoose.connect(
			"mongodb+srv://Obianuju:6789@cluster0.huoachw.mongodb.net/",
			() => {
				console.log("database connected");
			}
		);
	} catch (error) {
		console.error(error);
	}
}

module.exports = ConnectDatabase;

