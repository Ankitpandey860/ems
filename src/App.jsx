import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import './index.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/*<Login />*/}
      {/*<div className="bg-red-500 h-screen">
        <EmployeeDashboard />
      </div>*/}
      <AdminDashboard />

      
    </>
  )
}

export default App

