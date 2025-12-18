import React, { useState } from "react";
import PackageCard from "./packageCard";
import { Link } from "react-router-dom";

const events = [
  { name: "Birthday Party", path: "birthday" },
  { name: "Anniversary", path: "anniversary" },
  { name: "Baby Shower", path: "babyShower" },
  { name: "Housewarming", path: "housewarming" },
  { name: "Naming Ceremony", path: "namingCeremony" },
  { name: "Proposal", path: "proposal" },
  { name: "Surprise Party", path: "surpriseParty" },
  { name: "Welcome Baby", path: "welcomeBaby" },
  { name: "Gender Reveal", path: "genderReveal" }
];


export default function Packages() {

  const packages = [
    { id: 1, image: "https://i.pinimg.com/736x/72/bb/51/72bb51b23cf78b03d532234af0e6e9ae.jpg", category: "Birthday", title: "Birthday Party", content: "Turn every birthday into a joyful and unforgettable celebration." },
    { id: 2, image: "https://i.pinimg.com/1200x/c4/e6/b1/c4e6b1c47bce253766eb32834056fda0.jpg", category: "Family", title: "Housewarming", content: "A simple and sacred Griha Pravesh decoration for your new beginning." },
    { id: 3, image: "https://img.pikbest.com/illustration/20250223/-baby-shower-function-for-pregnant-women_11548303.jpg!bw700", category: "Celebration", title: "Baby Shower", content: "Celebrating the beautiful journey of motherhood with love and warmth." },
    { id: 4, image: "https://i.pinimg.com/1200x/a4/a5/cd/a4a5cddb2aed8ca1fd129f58082dcf08.jpg", category: "Anniversary", title: "Anniversary Celebration", content: "Honoring the beautiful journey of two hearts growing together." },
    { id: 5, image: "https://gleamwedding.com/wp-content/uploads/2025/02/Fairy-Wedding-Decor-Ideas-1.jpg", category: "Surprise", title: "Surprise Party", content: "Creating a magical surprise that turns a special moment into a lifelong memory." },
    { id: 6, image: "https://i.pinimg.com/736x/88/9f/dc/889fdca61a4d7ff4d298a0b02c483d85.jpg", category: "Proposal", title: "Candlelight Proposal", content: "A grand proposal setup made with simplicity and love." },
    { id: 7, image: "https://i.pinimg.com/736x/cf/02/20/cf0220faf50654ffdccc89af67e78da4.jpg", category: "Welcome", title: "New Born Baby", content: "A beautiful new chapter begins. Welcome, baby." },
    { id: 8, image: "https://i.pinimg.com/736x/c9/ec/7f/c9ec7fb815ddfbfbc1a794b1d3289d81.jpg", category: "Naming", title: "Naming Ceremony", content: "Celebrate the joy of welcoming your little one with a heartfelt naming ceremony." },
    { id: 9, image: "https://i.pinimg.com/1200x/9d/42/d1/9d42d1ece64d9eceaefda4eebc332918.jpg", category: "Gender", title: "Gender Reveal", content: "A moment filled with love, joy, and the sweetest reveal." }
  ];

  // 🔹 State
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // 🔹 Filter logic
  const filteredPackages = packages.filter(pkg => {
    const matchSearch =
      pkg.title.toLowerCase().includes(search.toLowerCase()) ||
      pkg.content.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || pkg.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h2 className="text-lg font-bold text-center mb-6">
        Event Packages
      </h2>

      {/* 🔍 FILTER BAR */}
      <div className="bg-white rounded-lg shadow p-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search */}
        <div>
          <label className="text-sm font-medium">Search</label>
          <input
            type="text"
            placeholder="Search packages..."
            className="w-full border rounded px-3 py-2 mt-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium">Event Category</label>
          <select
            className="w-full border rounded px-3 py-2 mt-1"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Birthday</option>
            <option>Family</option>
            <option>Celebration</option>
            <option>Anniversary</option>
            <option>Surprise</option>
            <option>Proposal</option>
            <option>Welcome</option>
            <option>Naming</option>
            <option>Gender</option>
          </select>
        </div>

        {/* Price Range (UI only) */}
        <div>
          <label className="text-sm font-medium">Price Range</label>
          <select className="w-full border rounded px-3 py-2 mt-1">
            <option>All Prices</option>
            <option>₹5,000 - ₹10,000</option>
            <option>₹10,000 - ₹25,000</option>
            <option>₹25,000+</option>
          </select>
        </div>

      </div>

      {/* 📦 EVENT CARDS */}
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {events.map((event) => (
            <Link
            key={event.path}
            to={`/events/${event.path}`}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
        {filteredPackages.length > 0 ? (
          filteredPackages.map(pkg => (
            <PackageCard
              key={pkg.id}
              image={pkg.image}
              category={pkg.category}
              title={pkg.title}
              content={pkg.content}
            />
          ))
          
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No events found
          </p>
        )}
        </Link>
        ))} 
    </div>
        </div>
  );
}