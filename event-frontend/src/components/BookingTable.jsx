const BookingTable = () => {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Booking ID</th>
            <th className="p-3">Package</th>
            <th className="p-3">Event Date</th>
            <th className="p-3">Location</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">#001</td>
            <td className="p-3">Wedding Premium</td>
            <td className="p-3">12 Jan 2026</td>
            <td className="p-3">Hyderabad</td>
            <td className="p-3">₹50,000</td>
            <td className="p-3 text-green-600">Confirmed</td>
            <td className="p-3 text-purple-600 cursor-pointer">View</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
