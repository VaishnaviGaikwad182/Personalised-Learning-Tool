import React, { useState } from "react";
import { createFAMode } from "../../api/teacherAPI";
import { setToken } from "../../utils/api";

const FAMode = () => {
  const [form, setForm] = useState({
    department: "",
    subject: "",
    div: "",
    year: "",
    mode: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      setToken(token); // set JWT for Axios

      const res = await createFAMode({
        branch: form.department,
        subject: form.subject,
        year: form.year,
        faType: form.mode,
      });

      setMessage("✅ FA Mode set successfully!");
    } catch (err) {
      setMessage(err.response?.data?.msg || "Failed to set FA Mode");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto bg-gray-100">
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
            <option value="CS">Computer Science & Engineering</option>
            <option value="IT">Information Technology Engineering</option>
            <option value="ENTC">Electronics & Telecommunication Engineering</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="CE">Civil Engineering</option>
            <option value="FE">Applied Science and Humanities</option>
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

          {/* FA Mode */}
          <select
            name="mode"
            value={form.mode}
            onChange={handleChange}
            className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select FA Mode</option>
            <option value="Online">Online Quiz</option>
            <option value="Offline">Offline Test</option>
            <option value="Assignment">Assignment</option>
            <option value="Presentation">Presentation</option>
            <option value="Poster">Poster</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Setting..." : "Set FA Mode"}
          </button>
        </div>

        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default FAMode;
