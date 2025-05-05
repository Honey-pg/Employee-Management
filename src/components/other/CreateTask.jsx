import React,{ useContext, useState }from 'react'
import { Authcontext } from '../../context/AuthProvide'


const CreateTask = () => {
    const [userData, setuserData] = useContext(Authcontext)
     const [taskTitle, settaskTitle] = useState('')
     const [taskDate, settaskDate] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setnewTask] = useState({})

     const submitHandler=(e)=>{
      e.preventDefault();
      setnewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
      let updatedUserData = userData.map((elem) => {
         if (asignTo === elem.firstname) {
           return {
             ...elem,
             tasks: [...elem.tasks, newTask], // Tasks array ko copy + update
             taskCounts: {
               ...elem.taskCounts,
               newTask: elem.taskCounts.newTask + 1, //  Task count update
             },
           };
         }
         return elem;
       });
     
       setuserData(updatedUserData); // Correct way to update context
       console.log(updatedUserData);
        
      setCategory('')
      settaskTitle('')
      setAsignTo('')
      settaskDate('')
      settaskDescription('')
     }
  return (
        <div className='p-5 bg-[#1c1c1c] mt-10 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between' >
           
            <div className='w-1/2'> 
                 <div>
               <h3 className='text-sm text-gray-300 mb-1.5'>Task Title</h3>
            <input 
            value={taskTitle}
            onChange={((e)=>{
               settaskTitle(e.target.value)
            })}
            className='text-sm py-2 px-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make a UI Design' />
            </div>
                 <div><h3 className='text-sm text-gray-300 mb-1.5' >Date</h3>
            <input 
            value={taskDate}
            onChange={((e)=>{
               settaskDate(e.target.value)
            })}
            className='text-sm py-2 px-1 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400' type="date"/>
            </div>
            <div>   <h3 className='text-sm text-gray-300 mb-1.5'>Assign To</h3>
            <input 
            value={asignTo}
            onChange={((e)=>{
               setAsignTo(e.target.value)
            })}
            className='text-sm py-2 px-1 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400' type="text"  placeholder='employee name'/>
            </div>
            <div><h3 className='text-sm text-gray-300 mb-1.5'>Category</h3>
            <input
            value={category}
            onChange={((e)=>{
               setCategory(e.target.value)
            })}
             className='text-sm py-2 px-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='design,dev,etc' />
            </div>
            </div>
            <div className='w-1/2'><h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea 
            value={taskDescription}
            onChange={((e)=>{
               settaskDescription(e.target.value)
            })}
            className='bg-transparent border-[1px] px-2 py-3 outline-none w-full h-44  border-gray-400' name="" id="" cols={32} rows={10}></textarea>
             <button className='bg-emerald-400 py-3 px-5 rounded-sm hover:bg-emerald-700 text-sm mt-4 w-full'>Create Task</button> 
             </div>
        </form>
      </div>
  )
}

export default CreateTask
