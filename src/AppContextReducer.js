import React from 'react'
import TaskListComponent from './components/container/TaskListComponent'

//use context
import MiComponenteConContexto from "./TaskContext/taskContext";
import {Componente1} from './TaskContext/taskContext'

function AppContextReducer() {
  return (
    <div>
      <MiComponenteConContexto>
      
      <TaskListComponent/>

    
    
    </MiComponenteConContexto>
    </div>
  )
}

export default AppContextReducer
