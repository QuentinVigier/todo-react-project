import { useEffect, useState } from "react"
import { Header } from "./components/header"
import Tasks from "./components/tasks"

const LOCAL_STORAGE_KEY = "todo:savedTasks";

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(savedTasks);
    if(savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksandSave(newTasks: Task[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle: string) {
    
    setTasksandSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }


  function deleteTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksandSave(newTasks);
  }

  function toggleTaskCompleted(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      else {
        return task;
      }
    });
    setTasksandSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks 
      tasks={tasks}
      onComplete={toggleTaskCompleted}
      onDelete ={deleteTask}/>
    </>
  )
}

export default App
