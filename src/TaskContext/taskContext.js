import { useContext,createContext, useState, useReducer } from "react"
import { LEVEL } from '../components/models/level';
import {Task} from '../components/models/task.class'

export const miContexto= createContext(null);

export default function MiComponenteConContexto({children}) {
    const defaultTask1 = new Task("task1", "David", false, LEVEL.NORMAL);
    const defaultTask2 = new Task("task2", "David", true, LEVEL.URGENT);
    const defaultTask3 = new Task("task3", "David", false, LEVEL.BLOCKING);
    // Actions
     const SET = 'SET';
     const ADD = 'INCREMENT';
     const DELETE = 'DECREMENT';
     const UPDATE = 'RESET';
    
    // Initial State for Reducer
    const initialState = {tasks: [defaultTask1, defaultTask2, defaultTask3 ]}

    // Reducer to change State
    const reducer = (state, action) => {

        switch (action.type) {
            case SET:
                return {
                    ...state,
                    tasks: action.payload
                }
                
            case ADD:
                return {
                    ...state,
                    tasks: [...state.tasks,action.payload]
                }
            case DELETE:
                return {
                    
                }
            case UPDATE:
                return {
                   
                }
            default:
                return state;
        }

    }
  // Asign useReducer to state, reducer and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState)

    
 return (

    <miContexto.Provider value={{state,dispatch,ADD,SET,DELETE,UPDATE}}> {children} </miContexto.Provider>

  )
}

