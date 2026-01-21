require('dotenv').config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const connectDB = require("./config/db.js");
const TaskRoutes = require("./Routes/Taskroutes.js");

connectDB();

const app = express();
app.use(
    cors({
        origin : "http://localhost:5173",
        credentials : true,
    })
);
app.use(express.json());

app.use("/api/task", TaskRoutes);

app.get("/", (req, res) => {
    res.send("Please wait server is running on PORT...");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});