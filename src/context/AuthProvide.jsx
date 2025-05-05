import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const Authcontext=createContext()

const AuthProvide = ({children}) => {
 
    const[userData,setuserData]=useState(null)

    useEffect(() => { // side m yh data laega local storage se
   setLocalStorage()
      const{employees} = getLocalStorage()
    setuserData(employees)
    },[])

  
  return (
    <div>
      <Authcontext.Provider value={[userData,setuserData]}>
        {children}
      </Authcontext.Provider>
    </div>
  )
}

export default AuthProvide
