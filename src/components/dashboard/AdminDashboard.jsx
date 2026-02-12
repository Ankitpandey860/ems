import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full '>
      <Header/>
      <div className='bg-black'>
        <h3>Task Title</h3>
        <input type="text" placeholder='Task Title' />
        <h3>Task Description</h3>
        <textarea name="" id="" cols="30"></textarea>
        <h3>date </h3>
        <input type="date" />
      </div>
    </div>
  )
}

export default AdminDashboard;
