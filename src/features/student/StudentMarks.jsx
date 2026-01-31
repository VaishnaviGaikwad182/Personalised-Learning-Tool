import React from "react";

const StudentMarks = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">FA / SA Marks</h2>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Subject</th>
            <th className="p-2">FA1</th>
            <th className="p-2">FA2</th>
            <th className="p-2">SA</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="p-2">Maths</td>
            <td className="p-2">18</td>
            <td className="p-2">20</td>
            <td className="p-2">75</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentMarks;
