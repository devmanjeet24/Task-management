



import { deleteTask, updateTask } from "../Api.js";
import { useState } from "react";

const TaskItem = ({ task, refresh }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDesc, setEditDesc] = useState(task.description);

  const toggleStatus = async () => {
    await updateTask(task._id, {
      status: task.status === "Pending" ? "Completed" : "Pending"
    });
    refresh();
  };

  const removeTask = async () => {
    await deleteTask(task._id);
    refresh();
  };

  const saveChanges = async () => {
    await updateTask(task._id, {
      title: editTitle,
      description: editDesc
    });
    setIsEditing(false);
    refresh();
  };

  return (
    <div className="task-card border-1 border-[#ddd] p-4 mb-3 rounded-2xl bg-amber-100" >
      {isEditing ? (
        <>
          <div className="flex justify-center flex-col items-center gap-1.5">
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full text-center text-[20px] border-1 border-[#eee] p-2 bg-amber-50 rounded-2xl"
              placeholder="Edit Title"
            />
            <textarea
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
              className="w-full text-center text-[20px] border-1 border-[#eee] p-2 bg-amber-50 rounded-2xl"
              placeholder="Edit Description"
            />
            <div className="flex gap-3.5 mt-4">
            <button onClick={saveChanges} className="px-4 py-2 bg-amber-300 hover:bg-amber-400 text-white rounded-md transition">Save</button>
            <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-amber-300 hover:bg-amber-400 text-white rounded-md transition">Cancel</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-2xl mb-2">{task.title} ({task.status})</h3>
          <p className="text-3xl mb-3">{task.description}</p>
          <div className="flex gap-4.5 justify-center align-item-center mt-5">
            <button
              onClick={toggleStatus}
              className="px-4 py-2 bg-amber-300 hover:bg-amber-400 text-white rounded-md transition">Toggle Status
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-amber-300 hover:bg-amber-400 text-white rounded-md transition">Edit
            </button>

            <button
              onClick={removeTask}
              className="px-4 py-2 bg-amber-300 hover:bg-amber-400 text-white rounded-md transition">Delete
            </button>

          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
