import React, {useState, useReducer} from "react";
import s from "./App.module.scss";

import InputField from "./components/InputField"
import TaskList from "./components/TaskList";

import { Task } from "./model";

import TasksReducer from "./reducer/tasksReducer"

const App: React.FC = () => {
  const [task, setTask] = useState<string>("")
  const [tasksState, tasksDispatch] = useReducer(TasksReducer, [])

  const handleAdd = (e: React.FormEvent) : void =>{
    e.preventDefault()

    if(task){
      tasksDispatch({type: "add", payload: task})
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
          <TaskList tasksState={tasksState} tasksDispatch={tasksDispatch}/>
        </section>
      </main>
    </div>
  );
};

export default App;
