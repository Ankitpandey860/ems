import React from "react";

const AcceptTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 w-[350px] min-h-[250px] bg-yellow-400 rounded-xl p-5 flex flex-col justify-between">

      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-white text-xs px-3 py-1 rounded">
          High
        </h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>

      <div>
        <h2 className="mt-4 text-2xl font-semibold">
          {task.taskTitle}
        </h2>

        <p className="text-sm mt-2">
          {task.taskDescription}
        </p>
      </div>

      <div className="flex justify-between gap-3 mt-6">
        <button className="w-full bg-green-600 text-white py-2 rounded">
          Mark as Completed
        </button>
        <button className="w-full bg-red-600 text-white py-2 rounded">
          Mark as Failed
        </button>
      </div>

    </div>
  );
};

export default AcceptTask;