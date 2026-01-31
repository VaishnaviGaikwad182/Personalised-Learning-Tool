import React from "react";

const StudentQueries = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Queries</h2>

      {/* Raise Query */}
      <div className="bg-white p-4 shadow rounded">
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Enter your query..."
        />
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>

      {/* Query Responses */}
      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-semibold mb-2">Responses</h3>
        <p className="bg-gray-100 p-2 rounded">
          Teacher: Please check the updated marks.
        </p>
      </div>
    </div>
  );
};

export default StudentQueries;
