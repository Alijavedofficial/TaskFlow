'use client';

import * as React from 'react';
import { initialState } from '@/dummy';
import { Board, BoardAction } from '@/Types/types';

const boardInitialState: Board = {
    columns: initialState,
    ordered: Object.keys(initialState), 
};

const BoardContext = React.createContext({
    BoardState: boardInitialState,
    dispatch: (action: BoardAction) => {}
});

export const BoardProvider = ({children}:React.PropsWithChildren) => {

    const [BoardState, dispatch] = React.useReducer(boardReducer,boardInitialState )
    return(
        <BoardContext.Provider value={{BoardState, dispatch}}>
            {children}
        </BoardContext.Provider>
    )
}

function boardReducer(state: Board, action:BoardAction):Board {
    switch(action.type) {
        case 'SET_TASKS': {
            return action.payload
        }
        case 'MOVE_COLUMN': {
            const result = [...state.ordered]
            const [removed] = result.splice(action.payload.source.index, 1)
            result.splice(action.payload.destination.index, 0, removed)

            const newState = {...state, ordered: result}
            localStorage.setItem("@Board", JSON.stringify(newState))
            return newState;
        }
        case 'MOVE_TASK': {
            if(action.payload.source.droppableId === action.payload.destination.droppableId) {
                const reorderedtasks = [
                    ...state.columns[action.payload.source.droppableId],
                ]
                const [movedTask] = reorderedtasks.splice(action.payload.source.index, 1);
                reorderedtasks.splice(action.payload.destination.index, 0, movedTask)

                const newState = {
                    ...state,columns: {
                        ...state.columns, [action.payload.source.droppableId]: reorderedtasks
                    }
                }
                localStorage.setItem("@Board", JSON.stringify(newState))
                return newState;
            }
            const startTasks = [...state.columns[action.payload.source.droppableId]]
            const finishTasks = [...state.columns[action.payload.destination.droppableId]]
            const [removedTask] = startTasks.splice(action.payload.source.index, 1)
            finishTasks.splice(action.payload.destination.index, 0 , removedTask)

            const newState = {
                ...state, 
                columns: {
                    ...state.columns, [action.payload.source.droppableId]: startTasks, [action.payload.destination.droppableId]: finishTasks
                }
            }
            localStorage.setItem("@Board", JSON.stringify(newState))
            return newState;
        }
        case 'ADD_TASK': {
            const newState = {
                ...state, columns: {
                    ...state.columns, ["pending"]: [action.payload, ...state.columns.pending]
                }
            }
            localStorage.setItem("@Board", JSON.stringify(newState))
            return newState;
        }
        case 'REMOVE_TASK': {

        }
        default: {
            return boardInitialState
        }
    }
}