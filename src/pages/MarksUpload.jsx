import React, { useState } from "react";
import Sidebar from '../components/Sidebar';

const MarksUpload = () => {
  const [form, setForm] = useState({
    department: "",
    subject: "",
    paper: "",
    div: "",
    year: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file and form submission here
    alert("Marks uploaded successfully!");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto bg-blue-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📄 Upload Student Marks</h2>
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
              <option value="ASH">Applied Science and Humanities</option>
              <option value="CE">Computer Engineering</option>
              <option value="CEREG">Computer Engineering (Regional)</option>
              <option value="AI-ML">Computer Science & Engineering (AI-ML)</option>
              <option value="IT">Information Technology Engineering</option>
              <option value="ENTC">Electronics & Telecommunication Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CEV">Civil Engineering</option>
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

            {/* Paper */}
            <select
              name="paper"
              value={form.paper}
              onChange={handleChange}
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Paper</option>
              <option value="FA1">FA1</option>
              <option value="FA2">FA2</option>
              <option value="SA">SA</option>
            </select>
          </div>

          {/* File Upload */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Select File (.csv or .xlsx)</label>
            <label className="flex items-center justify-between w-full px-4 py-3 bg-blue-100 text-blue-900 rounded-lg border border-blue-300 cursor-pointer hover:bg-blue-200 transition">
              <span>{form.file ? form.file.name : "Choose file"}</span>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="hidden"
                required
              />
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Upload Marks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarksUpload;
