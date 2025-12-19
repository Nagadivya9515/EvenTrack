 import React from "react";
 import {Link} from "react-router-dom"
 const Navbar = () => {
  return (
    <div className="mb-20">
    <nav className="fixed top-0 left-0 w-full z-50 px-16 py-6 flex justify-between items-center bg-black/20 backdrop-blur-sm">
      <h1 className="font-playfair text-white text-2xl font-bold tracking-widest">
    
      </h1>

      <ul className="flex gap-10 font-playfair text-white text-[16px]">
        <li>
          <Link to ="/" className="cursor-pointer hover:border-b">Home</Link>
        </li>
        <li>
          <Link to="/Packages" className="cursor-pointer hover:border-b">Packages  </Link>
          </li>
        <li>
        <Link to ="/Products" className="cursor-pointer hover:border-b">Products & Gifts  </Link>
         </li>
        <li>
          <Link to ="/Cart" className="cursor-pointer hover:border-b">Cart </Link>
          </li>
        <li>
          <Link to ="/About" className="cursor-pointer hover:border-b">About </Link>
          </li>
        <li>
          <Link to ="/Login" className="cursor-pointer hover:border-b">Login  </Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
