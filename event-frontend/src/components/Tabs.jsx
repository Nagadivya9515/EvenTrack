const Tabs = ({ active, setActive }) => {
  return (
    <div className="bg-white p-2 rounded-xl inline-flex gap-2 shadow">
      {["Overview", "Manage Bookings"].map(tab => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 rounded-lg text-sm font-medium
            ${active === tab ? "bg-purple-600 text-white" : "text-gray-600"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
