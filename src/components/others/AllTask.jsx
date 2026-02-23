import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

  const [userData] = useContext(AuthContext);

  if (!userData) return null;

  return (
    <div className="bg-[#1f1f1f] p-8 rounded-2xl shadow-lg">

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">
        Employee Task Overview
      </h2>

      {/* Header Row */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 py-4 px-6 flex justify-between items-center rounded-xl font-semibold text-lg">
        <h2 className="w-1/5">Employee</h2>
        <h3 className="w-1/5 text-center">New</h3>
        <h3 className="w-1/5 text-center">Active</h3>
        <h3 className="w-1/5 text-center">Completed</h3>
        <h3 className="w-1/5 text-center">Failed</h3>
      </div>

      {/* Rows */}
      <div className="mt-5 space-y-4 max-h-[400px] overflow-y-auto pr-2">

        {userData.employees?.map((elem, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] py-5 px-6 flex justify-between items-center rounded-xl hover:bg-[#333] transition"
          >
            <h2 className="w-1/5 text-lg font-medium">
              {elem.firstname}
            </h2>

            <h3 className="w-1/5 text-center text-red-400 text-lg font-semibold">
              {elem.taskCounts.newTask}
            </h3>

            <h3 className="w-1/5 text-center text-yellow-400 text-lg font-semibold">
              {elem.taskCounts.active}
            </h3>

            <h3 className="w-1/5 text-center text-green-400 text-lg font-semibold">
              {elem.taskCounts.completed}
            </h3>

            <h3 className="w-1/5 text-center text-purple-400 text-lg font-semibold">
              {elem.taskCounts.failed}
            </h3>
          </div>
        ))}

      </div>
    </div>
    
  );
};

export default AllTask;