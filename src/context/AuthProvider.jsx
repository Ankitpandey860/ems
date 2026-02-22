import React, { createContext, useState, useEffect } from 'react'
import { getlocalstorage, setlocalstorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setlocalstorage()
    const { employeesData, adminData } = getlocalstorage()

    setUserData({
      employeesData,
      adminData
    })
  }, [])

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider