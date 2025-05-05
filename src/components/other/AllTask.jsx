import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvide'

const AllTask = () => {
    const [userData,setuserData] = useContext(Authcontext)
  return (
    <div className='p-5 bg-[#1c1c1c] rounded mt-7 '>
        <div className='bg-red-300 flex px-2 mb-2 py-4 justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
        </div>
      <div className=' '>
      {userData.map((elem,idx)=>{
         return <div key={idx}className='border-2 border-emerald-800 flex px-2 mb-2 py-4  justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>{elem.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-500'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-700'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-700'>{elem.taskCounts.failed}</h5>
        </div>
        })}
      </div>
{/*         
        <div className='bg-yellow-300 flex px-2 mb-2 py-4 justify-between rounded'>
            <h2>Prerak</h2>
            <h3>Make a Ui Design</h3>
            <h5>status</h5>
        </div>
        <div className='bg-blue-300 flex px-2 mb-2 py-4 justify-between rounded'>
            <h2>Prerak</h2>
            <h3>Make a Ui Design</h3>
            <h5>status</h5>
        </div>
        <div className='bg-green-300 flex px-2 mb-2 py-4 justify-between rounded'>
            <h2>Prerak</h2>
            <h3>Make a Ui Design</h3>
            <h5>status</h5>
        </div>
        <div className='bg-purple-300 flex px-2 mb-2 py-4 justify-between rounded'>
            <h2>Prerak</h2>
            <h3>Make a Ui Design</h3>
            <h5>status</h5>
        </div> */}
    </div>
  )
}

export default AllTask
