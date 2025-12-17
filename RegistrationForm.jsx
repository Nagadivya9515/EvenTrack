import React from "react";

export default function RegistrationForm() {
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-80 border p-6 space-y-4">
        <h2 className="text-xl font-semibold text-center">Register Form</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-3 py-2"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border px-3 py-2"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border px-3 py-2"
          required
        />

        <button type="submit" className="w-full border py-2 font-medium">
          Register
        </button>
      </form>
    </div>
  );
}
