import { Task } from "../model";

export type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number }
  | { type: "edit"; payload: { id: number; task: string } };

const TasksReducer = (state: Task[], action: Actions) => {
  const {type, payload} = action  

  switch (type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), task: payload, isDone: false },
      ];
    case "remove":
      return state.filter((task) => task.id !== payload);
    case "done":
      return state.map((task) =>
        task.id === payload ? { ...task, isDone: !task.isDone } : task
      );
    case "edit":
      return state.map((task) =>
        task.id === payload.id
          ? { ...task, task: payload.task }
          : task
      );

    default:
      return state;
  }
};

export default TasksReducer;
