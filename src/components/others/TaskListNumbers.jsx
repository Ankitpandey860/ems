import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='  flex mt-10 justify-between gap-5 w-full'>
      {/* span full viewport width with negative margins to cancel parent padding */}
      <div className="
            bg-[#f87171]
            w-[380px]
            h-[140px]
            rounded-2xl
            p-6
            flex
            flex-col
            justify-center
            ">
            <h1 className="text-white text-3xl font-bold">0</h1>
            <p className="text-white text-lg mt-2">New Task</p>
        </div>
    </div>
  )
}

export default TaskListNumbers
