import React from "react";
import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";
export default function EventTemplate({ event }) {
  if (!event) {
    return <p className="text-center mt-10">Event not found</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <Breadcrumb />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* LEFT SECTION */}
      <div className="lg:col-span-2 space-y-6">

        {/* About */}
        
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">
            About This Event
          </h2>
          <p className="text-gray-600">
            {event.description}
          </p>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">
            What’s Included
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {event.includes.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
              >
                <span className="text-green-600 text-lg">✔</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Perfect For */}
        <div className="bg-purple-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">
            Perfect For
          </h2>
          <p className="text-gray-700">
            {event.title}
          </p>
        </div>

        {/* Why Choose */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">
            Why Choose This Event?
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">All-Inclusive Solution</h3>
              <p className="text-gray-600">
                Everything you need in one comprehensive event package
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Verified Vendors</h3>
              <p className="text-gray-600">
                Trusted and experienced service providers
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Customizable Options</h3>
              <p className="text-gray-600">
                Tailor the event to match your specific requirements
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Dedicated Coordinator</h3>
              <p className="text-gray-600">
                A coordinator to manage everything smoothly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PRICE CARD */}
      <div className="bg-white rounded-xl p-6 shadow h-fit">
        <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm mb-4">
          ⭐ Popular Choice
        </span>

        <p className="text-gray-500">Event Price</p>
        <h2 className="text-3xl font-bold text-purple-700 mb-2">
          {event.price}
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          *Base price, customizable based on requirements
        </p>

        <div className="text-sm text-gray-600 space-y-2 mb-6">
          <p>📦 Services Included: {event.includes.length}</p>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-lg mb-3 hover:bg-purple-700 transition">
          Add to Cart
        </button>
        <Link to="/bookings">
        <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition">
          Book Now
        </button>
        </Link>
        <p className="text-center text-purple-600 mt-4 cursor-pointer">
          Call for Custom Quote
        </p>

        <div className="bg-blue-50 text-blue-700 text-sm p-3 rounded-lg mt-4">
          💡 Tip: Book early to get exciting discounts
        </div>
      </div>

    </div>
    </div>
  );
}
