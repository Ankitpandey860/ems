import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-start mb-10">
      <h1 className="text-white text-3xl font-semibold">
        Hello <br />
        <span className="text-4xl font-bold">Dost 👋</span>
      </h1>

      <button className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-600 transition">
        Log Out
      </button>
    </div>
  );
};

export default Header;

