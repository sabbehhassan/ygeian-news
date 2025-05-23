import React from "react";
import logo from "../../assets/logoimg/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-[#FFFFFF] px-4 sm:px-8 py-3 shadow flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="YGEIAN Logo" className="w-36 sm:w-40" />
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center mx-4 w-[400px] relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-xl px-4 py-2 pr-10 text-sm focus:outline-none"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none" />
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3 text-sm">
        <Link to="/login" className="text-gray-700 hover:text-blue-600">
          Log In
        </Link>
        <Link to="/register" className="bg-[#43B3E5] hover:bg-blue-500 text-white px-4 py-1.5 rounded-full">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
