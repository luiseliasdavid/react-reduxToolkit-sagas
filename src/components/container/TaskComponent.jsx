import React, {useRef,useEffect}  from 'react'
import PropTypes from 'prop-types'
import { Task } from '../models/task.class'


import './TaskComponent.scss'

const TaskComponent = ({task, completed, deleteTask}) => {

  useEffect(()=>{
   
    return () => {
   //   console.log(`contacto:  ${contacto.name} a sido creado`)
    }
  },[task] )

 const tasksCompleted = {
  
  fontWeight: 'lighter',
  textDecorationStyle: 'dotted',
  color: 'grey',
  textDecoration: 'line-through'

}
const tasksPending = {
 
  textDecorationStyle: 'dotted',
  fontWeight: 'bold',
  color: 'tomato'
 }

 function taskLevel (){
  if (task.level=== 'normal') 
  {return <span className="btn btn-primary btn-sm" >NORMAL</span>}
  if (task.level=== 'urgent')
   { return<span className="btn btn-danger btn-sm" >URGENT</span>}
  if (task.level=== 'blocking')
   { return <span className="btn btn-warning btn-sm " >BLOCKING</span>}
  
 }
function taskCompleted (){
  if(task.completed) {
    return  <i onClick={()=>completed(task)} className="bi-toggle-on task-action" style={{color:'green'}}></i>
  } else {
    return <i onClick={()=>completed(task)} className="bi-toggle-off task-action" style={{color:'grey'}}></i>}
  
}

  return (
    <tr style={task.completed? tasksCompleted : tasksPending}>
      <td>
        <span className="ms-2">{task.name}</span>
      </td>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
       
         { taskLevel()}
       
      </td>
      <td className="align-middle">
        <span>
        {taskCompleted()}
        <i onClick={()=>deleteTask(task)} className="bi bi-trash task-action" style={{color:'tomato'}}></i>
        </span>
      </td>
    </tr>

  );
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  completed: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskComponent