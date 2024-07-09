import { DraggableLocation } from "react-beautiful-dnd";

export type Task = {
    id: string;
    task: string;
    description: string;
    tag: string;
    date: string;
};

export type TaskMap = {
    [key:string]: Task[];
}

export type Board = {
    columns: TaskMap;
    ordered: string[];
}

export type BoardAction =
    | { type: 'SET_TASKS'; payload: Board}
    | { type: 'ADD_TASK'; payload: Task  }
    | { type: 'REMOVE_TASK'; payload: RemoveTaskPayLoad }
    | { type: 'MOVE_TASK'; payload: OnDragPayLoad }
    | { type: 'MOVE_COLUMN'; payload: OnDragPayLoad }

    type OnDragPayLoad = {
        source: DraggableLocation;
        destination: DraggableLocation
    }

    type RemoveTaskPayLoad = {
        id: string;
    }