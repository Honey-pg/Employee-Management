import React from 'react'


const TaskListNumber = ({data}) => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        <div className='w-[47%] bg-red-400 rounded-xl px-10 py-5'>
             <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
             <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[47%] bg-green-400 rounded-xl px-10 py-5'>
               <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
             <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='w-[47%] bg-blue-400 rounded-xl px-10 py-5'>
             <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
             <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='w-[47%] bg-yellow-400 rounded-xl px-10 py-5'>
             <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
             <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
      
    </div> 
  )
}

export default TaskListNumber
