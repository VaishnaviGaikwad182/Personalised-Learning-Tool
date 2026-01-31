import React from "react";

const StudentDashboard = () => {
  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-2">Latest FA Marks</h3>
          <p className="text-3xl font-bold text-blue-600">18 / 20</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-2">SA Marks</h3>
          <p className="text-3xl font-bold text-green-600">75 / 100</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-2">Pending Queries</h3>
          <p className="text-3xl font-bold text-red-600">1</p>
        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;
