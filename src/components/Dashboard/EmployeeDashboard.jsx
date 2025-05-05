import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskLest from '../Tasklist/TaskLest'

const EmployeeDashboard = (props) => {
  console.log(props.data)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
        <Header changeUser={props.changeUser} data ={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskLest data={props.data}/>
      </div>
  )
}

export default EmployeeDashboard
