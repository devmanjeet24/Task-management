import TaskItem from "./TaskItem";

function TaskList({ tasks, refresh }) {


  if (!Array.isArray(tasks)) return <p>No tasks found</p>;

  return (
    <div>
      {tasks.map((tsk) => (
        <TaskItem key={tsk._id} task={tsk} refresh={refresh} />
      ))}
    </div>
  );
}

export default TaskList;
