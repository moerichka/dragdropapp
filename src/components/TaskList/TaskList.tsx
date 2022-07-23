import React from "react";
import s from "./taskList.module.scss";

import SingleTask from "../SingleTask";

import { Task } from "../../model";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = (props) => {
  return (
    <div className={s.taskList}>
        <div className={s.container}>
        {props?.tasks?.map((task) => (
          <SingleTask
            task={task}
            key={task.id}
            tasks={props.tasks}
            setTasks={props.setTasks}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
