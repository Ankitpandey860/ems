import React, { createContext, useState, useEffect } from 'react'
import { getlocalstorage, setlocalstorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    setlocalstorage()
    const { employeesData, adminData } = getlocalstorage()
    setUser({ employeesData, adminData })
  }, [])

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
