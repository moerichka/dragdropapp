import React from "react";
import s from "./taskList.module.scss";

import SingleTask from "../SingleTask";

import { Task } from "../../model";
import { Actions } from "../../reducer/tasksReducer";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  tasksState: Task[];
  tasksDispatch: React.Dispatch<Actions>;
  doneTasksState: Task[];
  doneTasksDispatch: React.Dispatch<Actions>;
}

const TaskList: React.FC<Props> = (props) => {
  return (
    <div className={s.taskList}>
      <div className={s.container}>
        <div className={s.active}>
          <div className={s.taskheader}>Active Tasks</div>
          <Droppable droppableId="activeTasks">
            {(provided, snapshot) => (
              <div
                className={s.tasks}
                ref={provided.innerRef}
                {...provided.droppableProps}
                data-isdragging={snapshot.isDraggingOver}
              >
                {props?.tasksState?.map((task, index) => (
                  <SingleTask
                    index={index}
                    task={task}
                    isDone={false}
                    key={task.id}
                    tasksState={props.tasksState}
                    tasksDispatch={props.tasksDispatch}
                    doneTasksState={props.doneTasksState}
                    doneTasksDispatch={props.doneTasksDispatch}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className={s.done}>
          <div className={s.taskheader}>Completed Tasks</div>
          <Droppable droppableId="doneTasks">
            {(provided, snapshot) => (
              <div
                className={s.tasks}
                ref={provided.innerRef}
                {...provided.droppableProps}
                data-isdragging={snapshot.isDraggingOver}
              >
                {props?.doneTasksState?.map((task, index) => (
                  <SingleTask
                    index={index}
                    task={task}
                    isDone={true}
                    key={task.id}
                    tasksState={props.tasksState}
                    tasksDispatch={props.tasksDispatch}
                    doneTasksState={props.doneTasksState}
                    doneTasksDispatch={props.doneTasksDispatch}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
