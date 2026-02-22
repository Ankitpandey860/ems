import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  if (!authData || !authData.employeesData) return null;

  return (
    <div className="bg-[#1c1c1c] p-6 rounded-xl mt-10 h-64 overflow-y-auto">

      {/* Header Row */}
      <div className="bg-red-500 text-white py-3 px-5 flex justify-between items-center rounded-lg font-semibold">
        <h2 className="w-1/5">Employee</h2>
        <h3 className="w-1/5 text-center">New</h3>
        <h3 className="w-1/5 text-center">Active</h3>
        <h3 className="w-1/5 text-center">Completed</h3>
        <h3 className="w-1/5 text-center">Failed</h3>
      </div>

      {/* Employee Rows */}
      {authData.employeesData.map((elem) => {
        return (
          <div
            key={elem.id}
            className="bg-[#2a2a2a] text-white py-3 px-5 flex justify-between items-center rounded-lg mt-3"
          >
            <h2 className="w-1/5">{elem.firstname}</h2>
            <h3 className="w-1/5 text-center">{elem.taskCounts.newTask}</h3>
            <h3 className="w-1/5 text-center">{elem.taskCounts.active}</h3>
            <h3 className="w-1/5 text-center">{elem.taskCounts.completed}</h3>
            <h3 className="w-1/5 text-center">{elem.taskCounts.failed}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;