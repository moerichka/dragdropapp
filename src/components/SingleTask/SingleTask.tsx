import React, { useEffect, useRef, useState } from "react";
import s from "./singleTask.module.scss";

import { Task } from "../../model";

import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = (props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(props.task.task);

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    inputRef.current?.focus();
  },[edit])

  const handleDone = (id: number) => {
    props.setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    props.setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    props.setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setEdit(false)
  };

  return (
    <form
      onSubmit={(e) => handleEdit(e, props.task.id)}
      className={s.singleTask}
      data-iscomplited={props.task.isDone}
    >
      {edit ? (
        <input
          value={editTask}
          className={s.singleinput}
          onChange={(e) => setEditTask(e.target.value)}
          ref={inputRef}
        />
      ) : props.task.isDone ? (
        <s className={s.singletext}>{props.task.task}</s>
      ) : (
        <span className={s.singletext}>{props.task.task}</span>
      )}
      <div className={s.icons}>
        <span
          className={s.icon}
          onClick={() => !edit && !props.task.isDone && setEdit(!edit)}
        >
          <FiEdit3 />
        </span>
        <span className={s.icon} onClick={() => handleDelete(props.task.id)}>
          <RiDeleteBin2Line />
        </span>
        <span className={s.icon} onClick={() => handleDone(props.task.id)}>
          <BsCheckCircle />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
