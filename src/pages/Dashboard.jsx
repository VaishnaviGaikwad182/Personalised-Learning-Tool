import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import QuerySection from "../components/QuerySection";

const Dashboard = () => {
  const [filters, setFilters] = useState({
    department: "",
    subject: "",
    division: "",
    year: "",
  });

  const stats = [
    { label: "Avg. Marks", value: "85%", color: "text-green-600" },
    { label: "Pending Queries", value: "12", color: "text-purple-600" },
    { label: "Total Students", value: "60", color: "text-blue-600" },
    { label: "Submissions Received", value: "48", color: "text-indigo-600" },
    { label: "FA Mode Set", value: "✅ Yes", color: "text-teal-600" },
  ];

  const allSelected = filters.department && filters.subject && filters.division && filters.year;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto p-6 space-y-6 bg-blue-100">

        {/* Filter Form */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Select Class Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Subject */}
            <input
              type="text"
              value={filters.subject}
              onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
              placeholder="Enter Subject"
              className="p-3 border rounded-lg bg-gray-100"
            />

            {/* Division */}
            <input
              type="text"
              value={filters.division}
              onChange={(e) => setFilters({ ...filters, division: e.target.value })}
              placeholder="Enter Division"
              className="p-3 border rounded-lg bg-gray-100"
            />

            {/* Department */}
            <select
              value={filters.department}
              onChange={(e) => setFilters({ ...filters, department: e.target.value })}
              className="p-3 border rounded-lg bg-gray-100"
            >
                <option value="">Select Department</option>
                <option value="ENTC">Applied Science and Humanities</option>
                <option value="CS">Computer Engineering</option>
                <option value="CS">Computer Engineering (Regional)</option>
                <option value="CS">Computer Science & Engineering (AI-ML)</option>
                <option value="IT">Information Technology Engineering</option>
                <option value="ENTC">Electronics & Telecommunication Engineering</option>
                <option value="ENTC">Mechanical Engineering</option>
                <option value="ENTC">Civil Engineering</option>
            </select>

            {/* Year */}
            <select
              value={filters.year}
              onChange={(e) => setFilters({ ...filters, year: e.target.value })}
              className="p-3 border rounded-lg bg-gray-100"
            >
              <option value="">Select Year</option>
              <option value="FE">First Year (FE)</option>
              <option value="SE">Second Year (SE)</option>
              <option value="TE">Third Year (TE)</option>
              <option value="BE">Final Year (BE)</option>
            </select>
          </div>

          {!allSelected && (
            <p className="text-center text-gray-500 mt-4">
              Please select subject, division, department and year to view class stats.
            </p>
          )}
        </div>

        {/* Conditional Class Stats */}
        {allSelected && (
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">📊 Overall Class Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-100 rounded-lg p-4 text-center shadow-sm">
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-gray-700 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Query Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md min-h-[400px]">
          <QuerySection />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
