import { useEffect, useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import axios from 'axios';


function App() {
  const [tasks,setTasks] = useState([]);
  
  const createTask = async (title,desc) =>{
    const response = await axios.post("http://localhost:3001/tasks",{
      title,
      desc,
    });
    console.log(response);
    const createdTasks = [
      ...tasks,response.data
    ];
    setTasks(createdTasks);
  }

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    console.log(response);
    setTasks(response.data);
  }

  useEffect(()=>{
    fetchData();
  },[])

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const afterFilteredTask = tasks.filter((task) =>{
      return task.id !== id;
    })
     setTasks(afterFilteredTask);
  }
  const editTaskById = async (id,updatedTitle,updatedDesc) => {
    await axios.put(`http://localhost:3001/tasks/${id}`,{
      title:updatedTitle,
      desc:updatedDesc,
    });
    const updatedTasks = tasks.map((task) =>{
      if(task.id === id){
        return {
          id, 
          title: updatedTitle,
          desc:updatedDesc
        }
      }
      return task;
    })
     setTasks(updatedTasks);
  }
  
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks = {tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  );
}

export default App;
