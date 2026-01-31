import React, { useState } from "react";

const Queries = () => {
  const [form, setForm] = useState({
    department: "",
    subject: "",
    div: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    alert("Query submitted successfully!");
  };

  return (
      <div className="flex-1 p-8 overflow-y-auto bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📩 Submit Student Query Response</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-6 max-w-3xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Subject textbox */}
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Enter Subject"
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Division textbox */}
            <input
              type="text"
              name="div"
              value={form.div}
              onChange={handleChange}
              placeholder="Enter Division"
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Department Dropdown */}
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
            
            {/* Paper dropdown */}
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

          {/* Query Textarea */}
          <div>
            <textarea
              name="query"
              value={form.query}
              onChange={handleChange}
              placeholder="Type your query response here..."
              rows="5"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Query Response
            </button>
          </div>
        </form>
      </div>
  );
};

export default Queries;
