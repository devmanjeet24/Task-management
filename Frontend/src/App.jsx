import { useState } from 'react';
import './App.css'
import { getTasks } from './Api';
import { useEffect } from 'react';
import Taskform from './Components/Taskform';
import TaskList from './Components/Tasklist';

function App() {

  const [tasks, setTasks] = useState([]);

  const loadData = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className='bg-gray-100 h-full p-[60px] flex justify-center'>
        <div className='w-3xl'>
          <h1 className='text-4xl  font-bold mb-[50px] font-normal text-amber-400'>Task Manager</h1>
          <Taskform refresh={loadData} />
          <TaskList tasks={tasks} refresh={loadData} />
        </div>
      </div>
    </>
  )
}

export default App
