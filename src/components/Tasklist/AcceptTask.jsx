import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data.taskTitle)
  return (
    <div className='h-full w-[340px] rounded-lg  bg-red-400 flex-shrink-0 p-5'>
    <div className='flex justify-between items-center'>
    <h3 className='bg-red-700 px-4 py-1 rounded text-sm'> {data.category}</h3>
   <h4>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-2 '>{data.taskDescription}</p>
   <div className='flex justify-between mt-4'>
    <button className='bg-green-500 test-sm py-1 px-2 rounded'>Mark as Completed</button>
    <button className='bg-red-500 test-sm py-1 px-2 rounded'>Mark as Failed</button>
   </div>
</div>
  )
}

export default AcceptTask
