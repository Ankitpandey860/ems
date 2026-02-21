import React from 'react'
import Header from '../others/Header'
import AllTask from '../others/AllTask'

const AdminDashboard = ({data}) => {
  return (
    <div className="min-h-screen w-full bg-[#1C1C1C] text-white px-12 py-8">
      
      <Header data={data} />

      {/* Form Section */}
      <div className="mt-8 bg-[#2A2A2A] p-8 rounded-2xl shadow-lg w-full">
        <h2 className="text-2xl font-semibold mb-8">
          Create New Task
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-6">
            <input className="bg-[#1C1C1C] border border-gray-600 rounded-lg px-4 py-3" placeholder="Task Title"/>
            <textarea className="bg-[#1C1C1C] border border-gray-600 rounded-lg px-4 py-3 resize-none" rows="4"/>
            <input type="date" className="bg-[#1C1C1C] border border-gray-600 rounded-lg px-4 py-3"/>
          </div>

          <div className="flex flex-col gap-6">
            <input className="bg-[#1C1C1C] border border-gray-600 rounded-lg px-4 py-3" placeholder="Assign To"/>
            <input className="bg-[#1C1C1C] border border-gray-600 rounded-lg px-4 py-3" placeholder="Task Type"/>
            <button className="bg-emerald-500 hover:bg-emerald-600 py-3 rounded-lg font-semibold">
              Create Task
            </button>
          </div>

        </div>
      </div>

      {/* All Tasks Section */}
      <AllTask />

    </div>
  )
}

export default AdminDashboard