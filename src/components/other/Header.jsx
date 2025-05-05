import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
//  const[username,setUsername]=useState('')
//  if(!data){
//   setUsername('Admin')
//  }
// else{
//   setUsername(data.data.firstname)
// }
 const logoutUser=()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  // window.location.reload()
 }
//  console.log(props.data.firstname);
  return (
    
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> {props.data.firstname}👋</span></h1>
      <button onClick={logoutUser} className='text-lg font-medium bg-red-600 px-5 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header
