import React from 'react'

const AllTask = () => {
  return (
    <div className="bg-[#1c1c1c] p-6 rounded-xl mt-1/2">

      {/* Title */}
      <h2 className="text-white text-xl font-semibold mb-6">
        All Tasks
      </h2>

      {/* Task List Container */}
      <div className="flex flex-col gap-4">

        <div className="bg-red-500 py-3 px-5 flex justify-between items-center rounded-lg">
          <h3 className="text-white font-medium">Ankit Pandey</h3>
          <p className="text-white">Make a UI Design</p>
          <span className="text-sm bg-black px-3 py-1 rounded text-white">
            Pending
          </span>
        </div>

        <div className="bg-yellow-500 py-3 px-5 flex justify-between items-center rounded-lg">
          <h3 className="font-medium">Ankit Pandey</h3>
          <p>Make a UI Design</p>
          <span className="text-sm bg-black px-3 py-1 rounded text-white">
            In Progress
          </span>
        </div>

        <div className="bg-green-500 py-3 px-5 flex justify-between items-center rounded-lg">
          <h3 className="font-medium">Ankit Pandey</h3>
          <p>Make a UI Design</p>
          <span className="text-sm bg-black px-3 py-1 rounded text-white">
            Completed
          </span>
        </div>

        <div className="bg-purple-500 py-3 px-5 flex justify-between items-center rounded-lg">
          <h3 className="font-medium">Ankit Pandey</h3>
          <p>Make a UI Design</p>
          <span className="text-sm bg-black px-3 py-1 rounded text-white">
            Review
          </span>
        </div>

        <div className="bg-blue-500 py-3 px-5 flex justify-between items-center rounded-lg">
          <h3 className="font-medium">Ankit Pandey</h3>
          <p>Make a UI Design</p>
          <span className="text-sm bg-black px-3 py-1 rounded text-white">
            Accepted
          </span>
        </div>

        <div className="bg-gray-500 py-3 px-5 flex justify-between items-center rounded-lg">
          <h3 className="font-medium">Ankit Pandey</h3>
          <p>Make a UI Design</p>
          <span className="text-sm bg-black px-3 py-1 rounded text-white">
            Failed
          </span>
        </div>

      </div>

    </div>
  )
}

export default AllTask
