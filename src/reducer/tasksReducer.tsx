import React, { useReducer } from "react";
import { Task } from "../model";

type Actions =
    |{type: "add", payload: string}
    |{type: "remove", payload: number}
    |{type: "done", payload: number};


    
const TasksReducer = (state: Task[], action: Actions) => {
    switch (action.type) {
        case "add":
            
            break;
    
        default:
            break;
    }
} 