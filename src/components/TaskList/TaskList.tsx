import React from "react";
import s from "./taskList.module.scss";

import SingleTask from "../SingleTask";

import { Task } from "../../model";
import { Actions } from "../../reducer/tasksReducer";

interface Props {
  tasksState: Task[];
  tasksDispatch: React.Dispatch<Actions>;
}

const TaskList: React.FC<Props> = (props) => {
  return (
    <div className={s.taskList}>
      <div className={s.container}>
        <div className={s.active}>
          <div className={s.taskheader}>Active Tasks</div>
          <div className={s.tasks}>
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
        <div className={s.done}>
          <div className={s.taskheader}>Completed Tasks</div>
          <div className={s.tasks}>
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
      </div>
    </div>
  );
};

export default TaskList;
