import { useState } from "react";

export default function AdminPanel() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* HEADER */}
      <h1 className="text-2xl font-semibold">Admin Panel</h1>
      <p className="text-gray-500 mt-1">
        Manage events, bookings, and platform settings
      </p>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <StatCard title="Total Bookings" value="0" subtitle="All time" />
        <StatCard title="Confirmed" value="0" subtitle="Active bookings" />
        <StatCard title="Pending" value="0" subtitle="Awaiting review" />
        <StatCard title="Total Revenue" value="₹0" subtitle="Excluding cancelled" />
      </div>

      {/* TABS */}
      <div className="bg-white rounded-xl p-2 mt-6 flex gap-2 shadow">
        <TabButton
          active={tab === "overview"}
          onClick={() => setTab("overview")}
        >
          Overview
        </TabButton>
        <TabButton
          active={tab === "bookings"}
          onClick={() => setTab("bookings")}
        >
          Manage Bookings
        </TabButton>
      </div>

      {/* OVERVIEW CONTENT */}
      {tab === "overview" && (
        <>
          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-xl p-6 mt-6 shadow">
            <h2 className="font-semibold mb-4">Quick Actions</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <QuickCard
                title="Manage Packages"
                desc="Add or edit event packages"
              />
              <QuickCard
                title="Manage Products"
                desc="Update product catalog"
              />
              <QuickCard
                title="View Customers"
                desc="Manage customer data"
              />
            </div>
          </div>

          {/* RECENT BOOKINGS */}
          <div className="bg-white rounded-xl p-6 mt-6 shadow">
            <h2 className="font-semibold">Recent Bookings</h2>
          </div>
        </>
      )}

      {/* MANAGE BOOKINGS TABLE */}
      {tab === "bookings" && (
        <div className="bg-white rounded-xl p-6 mt-6 shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-gray-600">
              <tr>
                <th className="text-left py-3">Booking ID</th>
                <th className="text-left py-3">Package</th>
                <th className="text-left py-3">Event Date</th>
                <th className="text-left py-3">Location</th>
                <th className="text-left py-3">Amount</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4">#001</td>
                <td>Wedding Premium</td>
                <td>12 Jan 2026</td>
                <td>Hyderabad</td>
                <td>₹50,000</td>
                <td className="text-green-600">Confirmed</td>
                <td className="text-purple-600 cursor-pointer">View</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ================= COMPONENTS ================= */

const StatCard = ({ title, value, subtitle }) => (
  <div className="bg-white rounded-xl p-6 shadow">
    <p className="text-gray-500 text-sm">{title}</p>
    <p className="text-2xl font-semibold mt-2">{value}</p>
    <p className="text-gray-400 text-xs mt-1">{subtitle}</p>
  </div>
);

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition
      ${
        active
          ? "bg-purple-600 text-white"
          : "text-gray-600 hover:bg-gray-100"
      }`}
  >
    {children}
  </button>
);

const QuickCard = ({ title, desc }) => (
  <div className="border border-purple-200 rounded-xl p-5">
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm text-gray-500 mt-1">{desc}</p>
  </div>
);