import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-500 text-white flex flex-col p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Teacher Panel</h1>
      <nav className="space-y-4">
        <div className="flex items-center space-x-2">
          <span>Dashboard</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Marks Upload</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Queries</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>FA Mode</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
