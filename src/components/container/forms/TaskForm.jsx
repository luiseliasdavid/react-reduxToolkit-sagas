import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import {LEVEL} from '../../models/level'
import { Task } from '../../models/task.class'

export default function TaskForm({add , tasksLength}) {

  const nameRef= useRef('')
  const descriptionRef= useRef('')
  const levelRef= useRef(LEVEL.NORMAL)

  function addTask(e){
    e.preventDefault();
    const newTask= new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    )
    add(newTask)
  }
  const normalStyle ={
    color: 'blue',
    fontWeight: 'bold'
  }
  const urgentStyle ={
    color: 'yellow',
    fontWeight: 'bold'
  }
  const blockingStyle ={
    color: 'tomato',
    fontWeight: 'bold'
  }

  return (
    <form
      onSubmit={addTask}
      className="d-flex justify-content-center  align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
          placeholder='task name'
        />
        <input
          ref={descriptionRef} id="inputDescription" type="text" className="form-control form-control-lg"
          required autoFocus  placeholder='tas description'
        />
        
        <select
          
          className='form-control form-control-lg'
          ref={levelRef}
          defaultValue={LEVEL.NORMAL}
          id="selectLevel"
        >
        <option  style={normalStyle}>
        LEVEL
        </option>
        <option value={LEVEL.NORMAL} style={normalStyle}>
          Normal
        </option>
        <option value={LEVEL.URGENT} style={urgentStyle}>
          Urgent
        </option>
        <option value={LEVEL.BLOCKING} style={blockingStyle}>
          Blocking
        </option>

        </select>
        <div style={{display:'flex', justifyContent:'center'}}>
      <button type='submmit' className='btn btn-success btn-lg ms-2'  >{tasksLength? 'add new task': 'create first task'}</button>
      </div>
      </div>
      
    </form>
  );
}

TaskForm.propTypes={
  add: PropTypes.func.isRequired,
  tasksLength: PropTypes.number.isRequired
}