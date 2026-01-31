import React from "react";
import { Link } from "react-router-dom";

const TeacherSignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-blue-300 px-4">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-2 text-center">Teacher Registration</h2>
        <p className="text-blue-400 text-center mb-6">Create your account</p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-gray-800 placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Department"
            className="w-full p-3 rounded-lg bg-gray-800 placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-800 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-800 placeholder-gray-500"
          />
        </form>

        <button
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-blue-300 to-blue-900 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login?role=teacher" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TeacherSignUpPage;
