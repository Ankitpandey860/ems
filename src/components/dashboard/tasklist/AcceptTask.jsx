import React from 'react'

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 w-[320px] h-[220px] bg-[#facc15] rounded-xl p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h3 className="bg-red-600 text-white text-xs px-3 py-1 rounded">
              High
            </h3>
            <h4 className="text-sm">10 Feb 2026</h4>
          </div>

          <h2 className="text-xl font-semibold">
            Make a youtube video
          </h2>

          <p className="text-sm text-gray-700">
            Description of task...
          </p>
          <div className='flex justify-between mt-4 '>
            <button className='bg-green-600 py-1 px-sm'>
                Mark as Completed
            </button>
            <button className='bg-white-600 py-1 px-sm'>
                Mark as Failed
            </button>
          </div>
    </div>
  )
}

export default AcceptTask
