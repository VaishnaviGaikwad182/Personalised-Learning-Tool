import React from 'react';
import { Link } from "react-router-dom";


const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white to-blue-300">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
        <p className="text-center mb-6">Welcome Back!</p>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-800 placeholder-gray-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-800 placeholder-gray-500"
          />
        </div>
        <div className="text-right mb-4">
          <a href="/forgot-password" className="text-blue-400 hover:underline text-sm">
            Forgot Password?
          </a>
        </div>
        <button className="w-full bg-gradient-to-r from-blue-300 to-blue-900 py-2 rounded-lg font-semibold hover:opacity-90">
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Don't Have an account?{' '}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
