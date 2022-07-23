import React, {useState} from "react";
import s from "./App.module.scss";

import InputField from "./components/InputField"
import TaskList from "./components/TaskList";

import { Task } from "./model";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAdd = (e: React.FormEvent) : void =>{
    e.preventDefault()

    if(task){
      setTasks([...tasks, {id: Date.now(), task, isDone: false}])
      setTask("")
    }
  }

  return (
    <div className={s.app}>
      <header className={s.header}>
        <div className={s.headercontainer}>
          <h1 className={s.headertitle}>CoolTaskManager</h1>
        </div>
      </header>
      <main className={s.main}>
        <section className={s.firstsection}>
          <InputField task={task} setTask={setTask} handleAdd={handleAdd}/> 
          <TaskList tasks={tasks} setTasks={setTasks}/>
        </section>
      </main>
    </div>
  );
};

export default App;
