import React, { useEffect, useState, useContext} from 'react';

import TaskForm from '../container/forms/TaskForm'
import TaskFormik from '../container/forms/TaskFormik';
import TaskComponent from '../container/TaskComponent';
import { LEVEL } from '../models/level';
import {Task} from '../models/task.class'
import { miContexto } from '../../TaskContext/taskContext';

const TaskListComponent = () => {
  const {state,dispatch,ADD,SET,DELETE,UPDATE}= useContext(miContexto)

 
  
  console.log(state.tasks,'hola1')
  

  
  
  const [filteredTask,SetFilteredTasks] = useState(state.tasks)

  const [isLoading, setIsLoading] = useState(true);

  

    const filter= (e)=>{
    e.preventDefault();
    
    let selection= e.target.value

    if(selection==='ALL') return SetFilteredTasks(state.tasks) 
    if(selection==='COMPLETED') return SetFilteredTasks( state.tasks.filter(item=> item.completed === true))
    if(selection==='PENDING') return SetFilteredTasks( state.tasks.filter(item=> item.completed === false))
  }

  useEffect(() => {
      setIsLoading(false);
      
    console.log('useEffect')
      }, [dispatch,state.tasks,filteredTask],);
  

  function completedTask(task){
    const index= state.tasks.indexOf(task);
    const tempTask= [...state.tasks];
    tempTask[index].completed= !tempTask[index].completed
    dispatch({type:SET,payload:tempTask});
  }

  function deleteTask(task){
   // console.log('delete this task', task)
    const index= state.tasks.indexOf(task);
    const tempTask= [...state.tasks];
    tempTask.splice(index,1)
    dispatch({type:SET,payload:tempTask})
  }
  function addTask(task){
      const tempTask= [...state.tasks];
    tempTask.push(task)
    dispatch({type:SET,payload:tempTask})
    
  }
  console.log(state.tasks.length)
  const Table= ()=>{
    return (
    <table>
    <thead>
      <tr>
        <th scope="col"> Task </th>
        <th scope="col">Description </th>
        <th scope="col">Priority </th>
        <th scope="col"> Actions </th>
      </tr>
    </thead>

    <tbody>
      {filteredTask?.map((task, index) => (
        <TaskComponent 
        key={index} 
        task={task} 
        completed={completedTask}
        deleteTask={deleteTask}
        ></TaskComponent>
      ))}
    </tbody>
  </table>
)
  }

  let taskTable= <Table></Table>

if (state.tasks.length>0){ taskTable= <Table></Table> }
else {taskTable= <div style={{display: 'flex', flexDirection: 'column',
  textAlign: 'center'}}> <h3>there is no tasks</h3>
<h6>Please, create one</h6>
</div>}

const isLoadingStyle= {
  color: 'grey',
  fontSize: '30px',
  fontWeight: 'bold'
}

  return (
    <div className="col-12">
      <div className="card">
        {/* card header */}
        <div className="card-header p-3">
          <h5>Your Tasks:</h5>
          <p>tasks by state</p>
          <select  onChange={(e)=> filter(e)}>
            
            
            <option >ALL</option>
            <option >COMPLETED</option>
            <option >PENDING</option>
            
          </select>

        </div>
        {/* car body */}
        <div
          className="card-body"
          data-mdb-perfect-scrollbar="true"
          style={{ position: "relative", height: "400px" }}
        >
         { isLoading? <p>Loading...</p> : taskTable}
          <div>
          </div>
        </div>
      </div>
        
            {/* <TaskForm add={addTask} tasksLength={tasks.length}></TaskForm> */}
            <TaskFormik add={addTask} tasksLength={state.tasks.length}></TaskFormik>
    </div>
  );
};

export default TaskListComponent