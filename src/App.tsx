import React, { useState, useReducer } from "react";
import s from "./App.module.scss";

import InputField from "./components/InputField";
import TaskList from "./components/TaskList";

import { DragDropContext, DropResult } from "react-beautiful-dnd";
import TasksReducer from "./reducer/tasksReducer";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasksState, tasksDispatch] = useReducer(TasksReducer, []);
  const [doneTasksState, doneTasksDispatch] = useReducer(TasksReducer, []);

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();

    if (task) {
      tasksDispatch({ type: "add", payload: task });
      setTask("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = tasksState,
      done = doneTasksState;

    if (source.droppableId === "activeTasks") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = done[source.index];
      done.splice(source.index, 1);
    }

    if (destination.droppableId === "activeTasks") {
      active.splice(destination.index, 0, add);
    } else {
      done.splice(destination.index, 0, add);
    }

    tasksDispatch({type: "rebuild", payload: active});
    doneTasksDispatch({type: "rebuild", payload: done});
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={s.app}>
        <header className={s.header}>
          <div className={s.headercontainer}>
            <h1 className={s.headertitle}>CoolTaskManager</h1>
          </div>
        </header>
        <main className={s.main}>
          <section className={s.firstsection}>
            <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
            <TaskList
              tasksState={tasksState}
              tasksDispatch={tasksDispatch}
              doneTasksState={doneTasksState}
              doneTasksDispatch={doneTasksDispatch}
            />
          </section>
        </main>
      </div>
    </DragDropContext>
  );
};

export default App;
