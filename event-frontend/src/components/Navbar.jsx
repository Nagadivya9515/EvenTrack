 import React from "react";
 const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-16 py-6 flex justify-between items-center bg-black/20 backdrop-blur-sm">
      <h1 className="font-playfair text-white text-2xl font-bold tracking-widest">
    
      </h1>

      <ul className="flex gap-10 font-playfair text-white text-[16px]">
        <li className="cursor-pointer hover:border-b">Home</li>
        <li className="cursor-pointer hover:border-b">Packages</li>
        <li className="cursor-pointer hover:border-b">Products & Gifts</li>
        <li className="cursor-pointer hover:border-b">About</li>
        <li className="cursor-pointer hover:border-b">Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
