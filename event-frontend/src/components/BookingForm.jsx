import React from "react";

function BookingForm() {
  return (
    <div className="bg-white w-[95%] md:w-[85%] lg:w-[75%] rounded-xl shadow-lg p-20 mx-auto">
 
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-800">
        Book Professionally On Venora
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Fill in the details below to confirm your booking
      </p>

      {/* Form */}
      <form className="mt-6 space-y-5">

        {/* Event Type */}
        <div>
          <label className="block text-left text-sm font-medium text-gray-700">
            Event Type <span className="text-red-500">*</span>
          </label>
          <select
            className="mt-1 w-full rounded-lg border border-gray-200 py-3 px-4 
                       outline-none focus:outline-none focus:ring-0 focus:border-gray-200">
            <option>Select event type</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Corporate Event</option>
            <option>Baby Shower</option>
          </select>
        </div>

        {/* Number of Guests */}
        <div>
          <label className="block text-left text-sm font-medium text-gray-700">
            Number of Guests <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="e.g., 50"
            className="mt-1 w-full rounded-lg border border-gray-200 py-3 px-4 
                       outline-none focus:outline-none focus:ring-0 focus:border-gray-200"
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Event Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="mt-1 w-full rounded-lg border border-gray-200 py-3 px-4 
                         outline-none focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Event Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              className="mt-1 w-full rounded-lg border border-gray-200 py-3 px-4 
                         outline-none focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>
        </div>

        {/* Venue Address */}
        <div>
          <label className="block text-left text-sm font-medium text-gray-700">
            Venue Address <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="3"
            placeholder="Enter complete venue address"
            className="mt-1 w-full rounded-lg border border-gray-200 py-3 px-4 
                       outline-none focus:outline-none focus:ring-0 focus:border-gray-200"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-left text-sm font-medium text-gray-700">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            className="mt-1 w-full rounded-lg border border-gray-200 py-3 px-4 
                       outline-none focus:outline-none focus:ring-0 focus:border-gray-200"
          />
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-left text-sm font-medium text-gray-700">
            Special Requests (Optional)
          </label>
          <textarea
            rows="3"
            placeholder="Any specific requirements or preferences?"
            className="mt-1 w-full rounded-lg border border-gray-200 py-3 px-4 
                       outline-none focus:outline-none focus:ring-0 focus:border-gray-200"
          />
        </div>

        {/* Price Summary */}
        <div className="bg-purple-50 rounded-lg p-4 flex justify-between text-sm">
          <div>
            <p className="text-gray-600">Service</p>
            <p className="font-medium">Professional Photography</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Starting Price</p>
            <p className="font-semibold text-purple-600">₹15,000</p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 
                     text-white font-medium py-3 rounded-lg transition">
          Confirm Booking
        </button>

      </form>
    </div>
    
  );
}

export default BookingForm;
