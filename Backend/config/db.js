const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        await mongoose.connect("mongodb://127.0.0.1:27017/taskDB");

        console.log("Database connected");

    } catch (error) {
        console.log("mongoDB connection error", error);
    }
}

module.exports = connectDB;