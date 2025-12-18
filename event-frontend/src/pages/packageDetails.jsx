import React from "react";

export default function PackageDetails() {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* LEFT SECTION */}
      <div className="lg:col-span-2 space-y-6">

        {/* About */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">About This Package</h2>
          <p className="text-gray-600">
            Complete wedding planning with all essential services for your big day
          </p>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">What’s Included</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Professional Photography & Videography",
              "Full Venue Decoration",
              "Multi-cuisine Catering",
              "DJ & Live Music",
              "Stage & Mandap Setup",
              "Lighting & Sound System",
            ].map((item, index) => (
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
          <h2 className="text-xl font-semibold mb-2">Perfect For</h2>
          <p className="text-gray-700">Weddings, Receptions</p>
        </div>

        {/* Why Choose */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">
            Why Choose This Package?
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">All-Inclusive Solution</h3>
              <p className="text-gray-600">
                Everything you need in one comprehensive package
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Verified Vendors</h3>
              <p className="text-gray-600">
                All service providers are carefully vetted and trusted
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Customizable Options</h3>
              <p className="text-gray-600">
                Tailor the package to match your specific requirements
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Dedicated Coordinator</h3>
              <p className="text-gray-600">
                Personal event coordinator to manage everything
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PRICE CARD */}
      <div className="bg-white rounded-xl p-6 shadow h-fit">
        <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm mb-4">
          ⭐ Most Popular
        </span>

        <p className="text-gray-500">Package Price</p>
        <h2 className="text-3xl font-bold text-purple-700 mb-2">
          ₹1,50,000
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          *Base price, customizable based on requirements
        </p>

        <div className="text-sm text-gray-600 space-y-2 mb-6">
          <p>👥 Guest Capacity: 200–500</p>
          <p>📦 Services Included: 6</p>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-lg mb-3 hover:bg-purple-700">
          Add to Cart
        </button>

        <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50">
          Book Now
        </button>

        <p className="text-center text-purple-600 mt-4 cursor-pointer">
          Call for Custom Quote
        </p>

        <div className="bg-blue-50 text-blue-700 text-sm p-3 rounded-lg mt-4">
          💡 Tip: Book 30+ days in advance for up to 15% discount
        </div>
      </div>
    </div>
  );
}