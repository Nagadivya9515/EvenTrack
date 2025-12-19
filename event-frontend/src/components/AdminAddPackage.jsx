import React from "react";

function AdminAddPackage() {

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!user || user.role !== "admin") {
    alert("Access denied");
    return;
  }

  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("category", form.category);
  formData.append("description", form.description);
  formData.append("price", form.price);
  formData.append("image", image);

  const res = await fetch("/api/v1/packages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body: formData
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.message);
    return;
  }

  alert("Package added successfully!");
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-6">

        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Add New Package
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Fill in the details below to create a new service package
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          {/* Title */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Package Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Premium Wedding Package"
              className="mt-1 w-full rounded-lg border border-gray-200 py-3 px-4
                         outline-none focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-gray-200 py-3 px-4
                         outline-none focus:outline-none focus:ring-0 focus:border-gray-200">
              <option>Select category</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Corporate</option>
              <option>Baby Shower</option>
              <option>Photography</option>
            </select>
          </div>

          {/* Content / Description */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Package Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Describe what is included in this package"
              className="mt-1 w-full rounded-lg border border-gray-200 py-3 px-4
                         outline-none focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Upload Package Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 w-full rounded-lg border border-gray-200 py-2 px-3
                         outline-none focus:outline-none focus:ring-0 focus:border-gray-200
                         file:border-0 file:bg-gray-100 file:px-4 file:py-2
                         file:rounded-md file:text-sm file:font-medium file:text-gray-700"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Price (₹) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="e.g., 15000"
              className="mt-1 w-full rounded-lg border border-gray-200 py-3 px-4
                         outline-none focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700
                       text-white font-medium py-3 rounded-lg transition">
            Add Package
          </button>

        </form>
      </div>
    </div>
  );
}

export default AdminAddPackage;
