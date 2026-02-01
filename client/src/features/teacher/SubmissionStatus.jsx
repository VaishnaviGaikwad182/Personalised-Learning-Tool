import React, { useEffect, useState } from "react";
import { getSubmissions } from "../../api/submissionAPI"; 
import { setToken } from "../../utils/api";

const SubmissionStatus = () => {
  const [filters, setFilters] = useState({
    department: "",
    year: "",
    div: "",
    paper: "",
  });

  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const allSelected = Object.values(filters).every(val => val !== "");

  useEffect(() => {
    const fetchSubmissions = async () => {
      if (!allSelected) return;

      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        setToken(token);

        const res = await getSubmissions(filters); // call backend API with filters
        setSubmissions(res.data); // [{ name, prn, submitted }]
      } catch (err) {
        console.error("Error fetching submissions:", err.response?.data?.msg || err.message);
        setSubmissions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [filters, allSelected]);

  return (
    <div className="flex-1 p-8 overflow-y-auto bg-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">📋 Check Student Submissions</h2>
      </div>

      <form className="bg-white shadow-xl rounded-2xl p-6 max-w-3xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            name="subject"
            value={filters.subject}
            onChange={handleChange}
            placeholder="Enter Subject"
            className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="text"
            name="div"
            value={filters.div}
            onChange={handleChange}
            placeholder="Enter Division"
            className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <select
            name="department"
            value={filters.department}
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

          <select
            name="year"
            value={filters.year}
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

          <select
            name="paper"
            value={filters.paper}
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
      </form>

      {allSelected && (
        <div className="bg-white shadow-xl rounded-2xl mt-8 max-w-4xl mx-auto p-6">
          <h3 className="text-xl font-bold mb-4">Submission Summary</h3>
          {loading ? (
            <p>Loading submissions...</p>
          ) : submissions.length === 0 ? (
            <p>No submissions found.</p>
          ) : (
            <table className="w-full text-left border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2">PRN</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((student, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{student.prn}</td>
                    <td className="p-2">{student.name}</td>
                    <td className="p-2">{student.submitted ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default SubmissionStatus;
