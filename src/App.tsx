import React, {useState} from "react";
import s from "./App.module.scss";

import InputField from "./components/InputField"
import TodoList from "./components/TodoList"

import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) : void =>{
    e.preventDefault()

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("")
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
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/> 
          <TodoList />
        </section>
      </main>
    </div>
  );
};

export default App;
