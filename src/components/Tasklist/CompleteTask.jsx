import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full w-[340px] rounded-lg  bg-green-400 flex-shrink-0 p-5'>
    <div className='flex justify-between items-center'>
    <h3 className='bg-red-700 px-4 py-1 rounded text-sm'>{data.category}</h3>
   <h4>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-2 '>{data.taskDescription}</p>
   <div className='mt-2 '>
    <button className='w-full bg-green-600 mt-1 py-1 rounded font-medium'>Complete</button>
   </div>  
</div>
  )
}

export default CompleteTask
