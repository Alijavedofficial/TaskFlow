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

    const [BoardState, dispatch] = React.useReducer(boardReducer, initialState)
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
            
        }
        case 'MOVE_TASK': {

        }
        case 'ADD_TASK': {

        }
        case 'REMOVE_TASK': {

        }
        default: {
            return boardInitialState
        }
    }
}