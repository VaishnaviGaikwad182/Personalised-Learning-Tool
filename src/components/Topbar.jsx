import React from "react";

const Topbar = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-red-500 rounded-full text-white flex items-center justify-center font-bold">VG</div>
      </div>
    </header>
  );
};

export default Topbar;
