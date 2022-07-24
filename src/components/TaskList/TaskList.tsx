import React from "react";
import s from "./taskList.module.scss";

import SingleTask from "../SingleTask";

import { Task } from "../../model";
import {Actions} from "../../reducer/tasksReducer"

interface Props {
  tasksState: Task[];
  tasksDispatch: React.Dispatch<Actions>;
}

const TaskList: React.FC<Props> = (props) => {
  return (
    <div className={s.taskList}>
        <div className={s.container}>
        {props?.tasksState?.map((task) => (
          <SingleTask
            task={task}
            key={task.id}
            tasksState={props.tasksState}
            tasksDispatch={props.tasksDispatch}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
