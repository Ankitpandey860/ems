import React from 'react'

const NewTask = () => {
  return (
    <div className="flex-shrink-0 w-[320px] h-[220px] bg-green-400 rounded-xl p-5 flex flex-col justify-between">
      
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-white text-xs px-3 py-1 rounded">
          High
        </h3>
        <h4 className="text-sm">20 Feb 2026</h4>
      </div>

      <h2 className="text-xl font-semibold">
        Make a youtube video
      </h2>

      <p className="text-sm text-gray-700">
        Description of task...
      </p>
        <div className='mt-4'>
            <button>
                Accept
            </button>
        </div>
    </div>
  )
}


export default NewTask
