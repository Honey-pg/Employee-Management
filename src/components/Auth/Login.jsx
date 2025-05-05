import React, { useState } from 'react'

// const submithandler=(e)=>{
// e.preventDefault();
// console.log("hello");
// }
const Login = ({handlelogin}) => {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  function submithandler(e){
    e.preventDefault()
    handlelogin(email,password)
     console.log("email is",email)
     console.log("password is",password)
    setemail("")
    setpassword("")
}
  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
         <form 
          onSubmit={submithandler}
         className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e)=>{
              setemail(e.target.value)
            }} 
            className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-4 rounded-full text-xl placeholder:text-grey-400' type="email" placeholder='Enter your email'/>
            <input 
             value={password}
            onChange={(e)=>{
             setpassword(e.target.value)
            }}
            className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-4 mt-3 rounded-full text-xl placeholder:text-grey-400' type="password" placeholder='Enter your password'/>
            <button className=' text-white outline-none mt-8 bordeer-none  bg-emerald-600 py-3 px-4 rounded-full text-xl'>Log In</button>
         </form>
        </div>
 
    </div>
  )
}

export default Login

