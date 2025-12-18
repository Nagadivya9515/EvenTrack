import { useState } from "react";
import StatCard from "../components/StatCard";
import Tabs from "../components/Tabs";
import QuickActionCard from "../components/QuickActionCard";
import BookingTable from "../components/BookingTable";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-semibold">Admin Panel</h1>
      <p className="text-gray-500 mb-6">
        Manage events, bookings, and platform settings
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
        <StatCard title="Total Bookings" value="0" subtitle="All time" />
        <StatCard title="Confirmed" value="0" subtitle="Active bookings" />
        <StatCard title="Pending" value="0" subtitle="Awaiting review" />
        <StatCard title="Total Revenue" value="₹0" subtitle="Excluding cancelled" />
      </div>

      {/* Tabs */}
      <Tabs active={activeTab} setActive={setActiveTab} />

      {/* Content */}
      {activeTab === "Overview" && (
        <div className="mt-6">
          <h2 className="font-semibold mb-3">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <QuickActionCard
              title="Manage Packages"
              description="Add or edit event packages"
            />
            <QuickActionCard
              title="Manage Products"
              description="Update product catalog"
            />
            <QuickActionCard
              title="View Customers"
              description="Manage customer data"
            />
          </div>
        </div>
      )}

      {activeTab === "Manage Bookings" && (
        <div className="mt-6">
          <BookingTable />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
