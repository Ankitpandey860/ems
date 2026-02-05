import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-[#1C1C1C]">
      {/* padding only, NO center */}
        <div style={{ paddingLeft: "50px" }}>
          <Header />
          <TaskListNumbers />
        </div>
    </div>
  );
};

export default EmployeeDashboard;

