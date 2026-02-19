import React from 'react'

const TaskListNumbers = ({ data }) => {

  if (!data || !data.taskCounts) return null;

  return (
    <div className="mt-10 flex flex-wrap gap-8">

      <div className="bg-[#f87171] w-[260px] h-[140px] rounded-2xl p-6 flex flex-col justify-center shadow-md">
        <h1 className="text-white text-3xl font-bold">
          {data.taskCounts.newTask}
        </h1>
        <p className="text-white text-lg mt-2">New Task</p>
      </div>

      <div className="bg-[#34d399] w-[260px] h-[140px] rounded-2xl p-6 flex flex-col justify-center shadow-md">
        <h1 className="text-white text-3xl font-bold">
          {data.taskCounts.completed}
        </h1>
        <p className="text-white text-lg mt-2">Completed</p>
      </div>

      <div className="bg-[#fbbf24] w-[260px] h-[140px] rounded-2xl p-6 flex flex-col justify-center shadow-md">
        <h1 className="text-white text-3xl font-bold">
          {data.taskCounts.active}
        </h1>
        <p className="text-white text-lg mt-2">Active</p>
      </div>

      <div className="bg-[#60a5fa] w-[260px] h-[140px] rounded-2xl p-6 flex flex-col justify-center shadow-md">
        <h1 className="text-white text-3xl font-bold">
          {data.taskCounts.newTask}
        </h1>
        <p className="text-white text-lg mt-2">Accepted</p>
      </div>

      <div className="bg-[#a78bfa] w-[260px] h-[140px] rounded-2xl p-6 flex flex-col justify-center shadow-md">
        <h1 className="text-white text-3xl font-bold">
          {data.taskCounts.failed}
        </h1>
        <p className="text-white text-lg mt-2">Failed</p>
      </div>

    </div>
  )
}

export default TaskListNumbers
