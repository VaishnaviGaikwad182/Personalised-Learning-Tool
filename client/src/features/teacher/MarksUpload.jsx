import React, { useState } from "react";
import { uploadMarks } from "../../api/teacherAPI";
import { setToken } from "../../utils/api";

const MarksUpload = () => {
  const [form, setForm] = useState({
    department: "",
    subject: "",
    paper: "",
    div: "",
    year: "",
    studentId: "",
    marks: "",
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
      setToken(token); // Set JWT for Axios

      // Call backend API
      await uploadMarks({
        studentId: form.studentId, // Must be MongoDB _id of student
        subject: form.subject,
        examType: form.paper,
        marks: parseInt(form.marks),
        year: form.year,
        branch: form.department,
      });

      setMessage("✅ Marks uploaded successfully!");
      setForm({ ...form, marks: "", studentId: "" });
    } catch (err) {
      setMessage(err.response?.data?.msg || "Failed to upload marks");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto bg-gray-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">📄 Upload Student Marks</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 max-w-3xl mx-auto space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            name="studentId"
            value={form.studentId}
            onChange={handleChange}
            placeholder="Student ID"
            className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

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

          <input
            type="number"
            name="marks"
            value={form.marks}
            onChange={handleChange}
            placeholder="Marks"
            className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="text"
            name="div"
            value={form.div}
            onChange={handleChange}
            placeholder="Division"
            className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Department</option>
            <option value="CS">Computer Science</option>
            <option value="IT">Information Technology</option>
            <option value="ENTC">Electronics & Telecommunication</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="CE">Civil Engineering</option>
            <option value="FE">Applied Science & Humanities</option>
          </select>

          <select
            name="year"
            value={form.year}
            onChange={handleChange}
            className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Year</option>
            <option value="FE">First Year</option>
            <option value="SE">Second Year</option>
            <option value="TE">Third Year</option>
            <option value="BE">Final Year</option>
          </select>

        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Uploading..." : "Upload Marks"}
          </button>
        </div>

        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default MarksUpload;
