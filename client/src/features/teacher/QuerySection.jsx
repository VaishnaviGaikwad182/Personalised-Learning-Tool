import React, { useEffect, useState } from "react";
import { getClassQueries } from "../../api/teacherAPI";
import { setToken } from "../../utils/api";

const QuerySection = ({ filters }) => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!filters.department || !filters.subject || !filters.division || !filters.year) return;

    const token = localStorage.getItem("token");
    setToken(token); 

    const fetchQueries = async () => {
      setLoading(true);
      try {
        const res = await getClassQueries(filters);
        setQueries(res.data); 
      } catch (err) {
        console.log("Error fetching class queries:", err.response?.data?.msg || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, [filters]);

  return (
    <div className="bg-white shadow-md p-6 rounded-2xl h-100 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-2">Queries / Notifications</h2>

      {loading ? (
        <p>Loading queries...</p>
      ) : queries.length === 0 ? (
        <p>No queries found for this class.</p>
      ) : (
        <ul className="space-y-2">
          {queries.map((q) => (
            <li key={q._id} className="bg-gray-100 p-2 rounded">
              <p><strong>{q.studentName}:</strong> {q.message}</p>
              {q.reply && <p className="text-sm text-gray-600 mt-1">Teacher: {q.reply}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuerySection;
