import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const { userData, setUserData } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: title,
      taskDescription: description,
      taskDate: date,
      category: category
    };

    const updatedEmployees = userData.employeesData.map((emp) => {

      if (emp.firstname.toLowerCase() === assignTo.toLowerCase()) {

        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1
          }
        };
      }

      return emp;
    });

    const updatedData = {
      ...userData,
      employeesData: updatedEmployees
    };

    setUserData(updatedData);

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // clear form
    setTitle("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");
  };

  if (!userData) return null;

  return (
    <div className="mt-8 bg-[#2A2A2A] p-8 rounded-2xl shadow-lg w-full">
      <h2 className="text-2xl font-semibold mb-8">Create New Task</h2>

      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >

        <div className="flex flex-col gap-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-[#1C1C1C] border border-gray-600 rounded-lg px-4 py-3"
            placeholder="Task Title"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-[#1C1C1C] border border-gray-600 rounded-lg px-4 py-3 resize-none"
            rows="4"
            placeholder="Task Description"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-[#1C1C1C] border border-gray-600 rounded-lg px-4 py-3"
          />
        </div>

        <div className="flex flex-col gap-6">
          <input
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="bg-[#1C1C1C] border border-gray-600 rounded-lg px-4 py-3"
            placeholder="Assign To (Firstname)"
          />

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-[#1C1C1C] border border-gray-600 rounded-lg px-4 py-3"
            placeholder="Task Type"
          />

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 py-3 rounded-lg font-semibold"
          >
            Create Task
          </button>
        </div>

      </form>
    </div>
  );
};

export default CreateTask;