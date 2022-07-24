import React, { useEffect, useRef, useState } from "react";
import s from "./singleTask.module.scss";

import { Task } from "../../model";

import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";

import { Actions } from "../../reducer/tasksReducer";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  index: number;
  task: Task;
  isDone: boolean;
  tasksState: Task[];
  tasksDispatch: React.Dispatch<Actions>;
  doneTasksState: Task[];
  doneTasksDispatch: React.Dispatch<Actions>;
}

const SingleTask: React.FC<Props> = (props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(props.task.task);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    props.tasksDispatch({ type: "done", payload: id });
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    props.tasksDispatch({ type: "remove", payload: id });
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    props.tasksDispatch({ type: "edit", payload: { id: id, task: editTask } });
    setEdit(false);
  };

  return (
    <Draggable draggableId={props.task.id.toString()} index={props.index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => handleEdit(e, props.task.id)}
          className={s.singleTask}
          data-iscomplited={props.isDone}
          data-isdragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              value={editTask}
              className={s.singleinput}
              onChange={(e) => setEditTask(e.target.value)}
              ref={inputRef}
            />
          ) : props.isDone ? (
            <s className={s.singletext}>{props.task.task}</s>
          ) : (
            <span className={s.singletext}>{props.task.task}</span>
          )}
          <div className={s.icons}>
            <span
              className={s.icon}
              data-ishidden={props.isDone}
              onClick={() => !edit && !props.isDone && setEdit(!edit)}
            >
              <FiEdit3 />
            </span>
            <span
              className={s.icon}
              onClick={() => handleDelete(props.task.id)}
            >
              <RiDeleteBin2Line />
            </span>
            <span className={s.icon} onClick={() => handleDone(props.task.id)}>
              <BsCheckCircle />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTask;
