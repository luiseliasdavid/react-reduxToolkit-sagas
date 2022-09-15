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
     const FILTER = 'FILTER';
    
    // Initial State for Reducer
    const initialState = {
        tasks: [defaultTask1, defaultTask2, defaultTask3 ],
        tasksCopy : [defaultTask1, defaultTask2, defaultTask3 ]
    }

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
                    tasks: [...state.tasksCopy,action.payload],
                    tasksCopy:[...state.tasksCopy,action.payload]
                }
            case FILTER:
                console.log(action.payload)
               let filteredSate= []
               if(action.payload==='ALL') filteredSate= state.tasksCopy
               if(action.payload==='COMPLETED') filteredSate= state.tasksCopy.filter(item=> item.completed === true)
               if(action.payload==='PENDING')filteredSate=state.tasksCopy.filter(item=> item.completed === false)

                return {
                    ...state,
                    tasks: filteredSate

                    
                }
            case DELETE:
                console.log(action.payload.name)
                let deleteSate= state.tasksCopy.filter(item=> item.name !== action.payload.name)
                
                return {
                   tasks: deleteSate,
                   tasksCopy: deleteSate
                }
            default:
                return state;
        }

    }
  // Asign useReducer to state, reducer and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState)

    
 return (

    <miContexto.Provider value={{state,dispatch,FILTER,ADD,SET,DELETE,UPDATE}}> {children} </miContexto.Provider>

  )
}

