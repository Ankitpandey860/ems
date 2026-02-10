import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="w-full bg-[#ef4444] mt-10 rounded-xl px-8 py-6"
    >
      {/* Horizontal Scroll Row */}
      <div className="flex gap-6 overflow-x-auto pb-2">

        {/* Card */}
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
        </div>

        {/* Duplicate cards (7–8 times) */}
        <div className="flex-shrink-0 w-[320px] h-[220px] bg-green-400 rounded-xl p-5"></div>
        <div className="flex-shrink-0 w-[320px] h-[220px] bg-blue-400 rounded-xl p-5"></div>
        <div className="flex-shrink-0 w-[320px] h-[220px] bg-purple-400 rounded-xl p-5"></div>
        <div className="flex-shrink-0 w-[320px] h-[220px] bg-pink-400 rounded-xl p-5"></div>
        <div className="flex-shrink-0 w-[320px] h-[220px] bg-orange-400 rounded-xl p-5"></div>
        <div className="flex-shrink-0 w-[320px] h-[220px] bg-cyan-400 rounded-xl p-5"></div>

      </div>
    </div>
  );
};

export default TaskList;

