import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "./tasklist/TaskList";

const EmployeeDashboard = ({data}) => {
  if (!data) return null;


  return (
    <div className="min-h-screen w-full bg-[#1C1C1C]">
      <div className="pl-12 pr-6 pt-6 flex flex-col gap-10">
        
        <Header data={data} />
        <TaskListNumbers data={data}/>
        <TaskList data={data}/>
      </div>
    </div>


  );
};

export default EmployeeDashboard;

