import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import './index.css'
import AllTask from './components/others/AllTask'
import { setlocalstorage } from './utils/LocalStorage'

function App() {
  const [user, setUsert] = useState(null)
  const handleLogin=(email,password)=>{
    const employeesData=JSON.parse(localStorage.getItem("employees"))
    const adminData=JSON.parse(localStorage.getItem("admin"))
    const user=employeesData.find(emp=>emp.email===email && emp.password===password)
    if(user){
      setUsert(user)
    }
    else if(adminData.email===email && adminData.password===password){
      setUsert(adminData)
    }
  }
  useEffect(()=>{
    setlocalstorage()
  },[])
  handleLogin()
  return (
    <>
      {!user ?<Login /> : ''}
      {<Login />}
      {/*<div className="bg-red-500 h-screen">
        <EmployeeDashboard />
      
      
      <AdminDashboard />
      <AllTask />
      </div>*/}

      
    </>
  )
}

export default App

