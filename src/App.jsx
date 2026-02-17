import { useEffect, useState } from 'react'

import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { setlocalstorage, getlocalstorage } from './utils/LocalStorage'
import './index.css'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    setlocalstorage()
  }, [])

  const handleLogin = (email, password) => {

    const { employeesData, adminData } = getlocalstorage()

    // Employee check
    const employee = employeesData.find(
      (emp) => emp.email === email && emp.password === password
    )

    if (employee) {
      setUser(employee)
      return
    }

    // Admin check (admin array hai)
    const admin = adminData.find(
      (adm) => adm.email === email && adm.password === password
    )

    if (admin) {
      setUser(admin)
      return
    }

    alert("Invalid credentials")
  }
  const data=useContext(AuthContext)
  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user && user.id !== 101 && <EmployeeDashboard />}

      {user && user.id === 101 && <AdminDashboard />}
    </>
  )
}

export default App
