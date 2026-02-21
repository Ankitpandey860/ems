import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

  const authData = useContext(AuthContext);

  if (!authData) return null;

  return (
    <div className="bg-[#1c1c1c] p-6 rounded-xl mt-6 space-y-4">

      {authData.employeesData.map((elem) => {

        return (
          <div
            key={elem.id}
            className="bg-green-500 py-3 px-5 flex justify-between items-center rounded-lg"
          >
            <h3 className="font-medium">{elem.firstname}</h3>

            <p>Total Tasks: {elem.tasks.length}</p>

            <span className="text-sm bg-black px-3 py-1 rounded text-white">
              Active: {elem.taskCounts.active}
            </span>
          </div>
        );
      })}

    </div>
  );
};

export default AllTask;