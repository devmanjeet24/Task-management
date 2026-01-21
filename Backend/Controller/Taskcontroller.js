const Task = require("../Model/Task");



const CreateTask = async(req, res) => {
    try {

        const task = await Task.create(req.body);
        res.json(task);
        
    } catch (error) {
        console.log("task creation error", error);
        res.status(500).json({ message: "Error in fetching tasks" });
    }
}


const GetTask = async(req, res) => {
  try {
    
    const task = await Task.find();
    res.json(task);

  } catch (error) {
    console.log("task find error", error);
    res.status(500).json({ message: "Error in fetching tasks" });
  }
}

const UpdateTask = async(req, res) => {

    try {

        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);

    } catch (error) {
        console.log("task update error", error);
        res.status(500).json({ message: "Error in fetching tasks" });
    }

    
}


const deleteTask  = async(req, res) => {
  try {
    
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json({message : "task deleted"});

  } catch (error) {
    console.log("task delete error", error);
    res.status(500).json({ message: "Error in fetching tasks" });
  }
}


module.exports = {
    CreateTask,
    GetTask,
    UpdateTask,
    deleteTask 
};