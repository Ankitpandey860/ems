import React from "react";
import Header from "../others/Header";
import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";

const AdminDashboard = ({ data }) => {
  return (
    <div className="min-h-screen w-full bg-[#1C1C1C] text-white px-12 py-8">
      <Header data={data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;