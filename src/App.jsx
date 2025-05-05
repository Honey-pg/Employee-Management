import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login' 
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { Authcontext } from './context/AuthProvide'

const App = () => {
  // useEffect(()=>{
  //   // setlocalstorage();
  // getlocalstorage();
  // })
  const [User,setUser]=useState(null)
  const [loggedInuserdata, setloggedInuserdata] = useState(null)
  const [userData,setuserData]=useContext(Authcontext) //authdata m daal diya authcontext ka data with help of usecontext()
  
  useEffect(() => {
  const loggedInUser=localStorage.getItem('loggedInUser')
  if(loggedInUser){
  const userData = JSON.parse(loggedInUser)
  setUser(userData.role)
  setloggedInuserdata(userData.data)
  }
  }, [])
  
  
  const handlelogin=(email,password)=>{ //jo vha se dalke aaya email aur pass uske basis p yha render krae pages
    if(email=="admin@me.com" && password=="123"){
     setUser('admin')
     localStorage.setItem("loggedInUser",JSON.stringify({role:"admin",data:admin}))
    }
    else if(userData){ 
      const employee=userData.find((e)=>email==e.email && e.password==password)
      if(employee){
        setUser('employee')   //yha pe check hua ki localstorage se match horha h ya nhi handlelogin k data
        setloggedInuserdata(employee)
    localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))  
      }
    
  }
  }
  return ( //yha se handlelogin login ko pass kra vha se usme email aur password dala hua aaya
    <div>
  {!User?<Login handlelogin={handlelogin}/>:''}
  {User=='admin'?<AdminDashboard changeUser={setUser} />:(User == 'employee'? <EmployeeDashboard changeUser={setUser} data={loggedInuserdata}/> : null)}
  {/* <EmployeeDashboard />
   <AdminDashboard /> */}
    </div>
  )
}

export default App

