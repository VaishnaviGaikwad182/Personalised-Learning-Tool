import React, { useEffect, useState } from "react";
import { getMyQueries, createQuery } from "../../api/queryAPI";
import API, { setToken } from "../../utils/api";

const StudentQueries = () => {
  const [queries, setQueries] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);

    fetchQueries();
    fetchTeachers();
  }, []);

  const fetchQueries = async () => {
    try {
      const res = await getMyQueries();
      setQueries(res.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchTeachers = async () => {
    try {
      const res = await API.get("/teacher/all");
      setTeachers(res.data);
    } catch (err) {
      console.log("Teacher fetch error", err.message);
    }
  };

  const handleSubmit = async () => {
    if (!subject || !teacherId || !message.trim()) {
      alert("Fill all fields");
      return;
    }

    setSubmitting(true);
    try {
      const res = await createQuery({
        subject,
        message,
        teacherId,
      });

      setQueries([res.data, ...queries]);

      setSubject("");
      setTeacherId("");
      setMessage("");
    } catch (err) {
      alert(err.response?.data?.msg || "Failed to submit query");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="p-6">Loading queries...</p>;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Queries</h2>

      {/* Raise Query */}
      <div className="bg-white p-4 shadow rounded space-y-3">

        {/* SUBJECT */}
        <select
          className="w-full border p-2 rounded"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          <option>DBMS</option>
          <option>OS</option>
          <option>CN</option>
          <option>Maths</option>
        </select>

        {/* TEACHER */}
        <select
          className="w-full border p-2 rounded"
          value={teacherId}
          onChange={(e) => setTeacherId(e.target.value)}
        >
          <option value="">Select Teacher</option>
          {teachers.map((t) => (
            <option key={t._id} value={t._id}>
              {t.name}
            </option>
          ))}
        </select>

        {/* MESSAGE */}
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Enter your query..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:opacity-90"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>

      {/* Query Display */}
      {queries.length === 0 ? (
        <p>No queries found.</p>
      ) : (
        queries.map((q) => (
          <div key={q._id} className="bg-white p-4 shadow rounded space-y-2">

            {/* YOUR QUERY */}
            <p className="font-semibold text-blue-700">
              Your {q.subject} Query:
            </p>

            <p className="bg-gray-100 p-2 rounded">
              {q.message}
            </p>

            {/* TEACHER RESPONSE */}
            {q.reply ? (
              <>
                <p className="font-semibold text-green-700 mt-3">
                  {q.subject} {q.teacherId?.name || "Faculty"} Response:
                </p>

                <p className="bg-green-100 p-2 rounded">
                  {q.reply}
                </p>
              </>
            ) : (
              <p className="text-gray-500 italic">
                Waiting for response...
              </p>
            )}

          </div>
        ))
      )}
    </div>
  );
};

export default StudentQueries;
