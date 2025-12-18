import { Link } from "react-router-dom";
import React from "react";
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      {/* Login Card */}
      <div className="bg-white border rounded-lg shadow-md w-96 p-6">
        
        {/* Username */}
        <input
          type="text"
          placeholder="Email address or phone number"
          className="w-full border rounded px-3 py-3 mb-3 mt-3 text-sm focus:outline-none focus:border-blue-500"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded px-3 py-3 mb-4 mt-4 text-sm focus:outline-none focus:border-blue-500"
        />

        {/* Login Button */}
        <Link to="/">
        <button className="w-full bg-blue-600 text-white py-3 rounded font-semibold text-lg hover:bg-blue-700">
          Log in
        </button>
        </Link>

        {/* Forgot Password */}
        <p className="text-center text-sm text-blue-600 mt-4 cursor-pointer">
          Forgotten password?
        </p>

        {/* Divider */}
        <hr className="my-4" />

        {/* Create Account */}
        <div className="flex justify-center">
          <Link to="/register">
            <button className="bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700">
              Create new account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}