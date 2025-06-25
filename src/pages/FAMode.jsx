import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const FAMode = () => {
  const [form, setForm] = useState({
    department: "",
    subject: "",
    div: "",
    mode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission (e.g., send to backend)
    alert(`FA Mode set to "${form.mode}" successfully!`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto bg-blue-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🎯 Set FA Mode</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-6 max-w-3xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Enter Subject"
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Division */}
            <input
              type="text"
              name="div"
              value={form.div}
              onChange={handleChange}
              placeholder="Enter Division"
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Department */}
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
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
              name="year"
              value={form.year}
              onChange={handleChange}
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Year</option>
              <option value="FE">First Year (FE)</option>
              <option value="SE">Second Year (SE)</option>
              <option value="TE">Third Year (TE)</option>
              <option value="BE">Final Year (BE)</option>
            </select>
            
            {/* FA Mode Dropdown */}
            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select FA Mode</option>
              <option value="Online">Online Quiz</option>
              <option value="Offline">Offline test</option>
              <option value="Assignment">Assignment</option>
              <option value="Assignment">Presentation</option>
              <option value="Assignment">Poster</option>
              <option value="Assignment">Other</option>

            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Set FA Mode
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FAMode;
