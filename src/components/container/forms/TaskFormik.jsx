import React from 'react'

import * as Yup from 'yup'
import { Formik, Form,Field,ErrorMessage } from 'formik'
import { LEVEL } from '../../models/level'
import { Task } from '../../models/task.class'



function TaskFormik({add , tasksLength}) {
    
    let task= new Task()

    const initialValues= {
        nameTask:'',
        description:'',
        level:LEVEL.NORMAL,
       
    }

    const taskSchema = Yup.object().shape(

        {
            nameTask: Yup.string()
                .min(4,'name must have 4 characters at least')
                .max(20, 'name must have lees than 20 characters')
                .required('name is required'),
            description: Yup.string()
                .min(4,'descrption must have 4 characters at least')
                .max(20, 'description must have lees than 20 characters')
                .required('description is required'),
            level: Yup.string().oneOf([LEVEL.NORMAL,LEVEL.URGENT,LEVEL.BLOCKING],'you must select a level')
                .required('level is required'),
            
            }
            );
         const submit=(values)=> {   
            alert('register user')
            }

            function addTask(values){
               
                console.log(values)
             
                const newTask= new Task(
                 values.nameTask,
                  values.description,
                  false,
                  values.level
                )
                add(newTask) 
              }
    return (
    
      <Formik className="d-flex justify-content-center  align-items-center mb-4"
      initialValues={initialValues}
      validationSchema={taskSchema}
      onSubmit={(values)=>addTask(values)}
      >
      {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
            <Form >
            <div className="form-outline flex-fill">
            
            <Field  className="form-control form-control-lg" id="nameTask" type="nameTask" name="nameTask" placeholder="Task name" />
            {errors.name && touched.name && 
            (
              
              <ErrorMessage name='nameTask' component='div'></ErrorMessage>
             
            )
            }
           
            
            <Field className="form-control form-control-lg" id="description" type="description" name="description" placeholder="description" />
            {errors.description && touched.description && 
            (
              
              <ErrorMessage name='description' component='div'></ErrorMessage>
             
            )
            }
           
           <Field className="form-control form-control-lg"
             component="select"
             id="level"
             name="level"
             
           >
             <option value="LEVEL.NORMAL">normal</option>
             <option value="LEVEL.URGENT">urgent</option>
             <option value="LEVEL.BLOCKING">blocking</option>
             
           </Field>
            <button className='btn btn-success btn-lg ms-2' type="submit">{tasksLength? 'add new task': 'create first task'}</button>
            {isSubmitting ? <p>Sending your credencials</p> : null}
            </div>
            </Form>
        ) }

      </Formik>

 
  )
}

export default TaskFormik