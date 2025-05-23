import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoImg/logo1.png';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white text-sm">
      {/* Top Section - Light Blue Background */}
      <div className="bg-[#132D5E] border-b border-[#0d2d3a] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Left Column: Logo */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Ygeian Logo" className="w-36 sm:w-40 object-contain" />
          </div>

          {/* Right Column: Links */}
          <div className="flex flex-col items-end mt-6 md:mt-0">
            <div className="flex flex-wrap justify-end gap-4 text-gray-300 text-sm">
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/faq" className="hover:text-white">FAQ</Link>
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms-of-use" className="hover:text-white">Terms of Use</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Dark Blue Background */}
      <div className="bg-[#002A3C] py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Powered By under logo */}
          <div className="text-xs text-gray-400 mt-2 md:mt-0">
            Powered by Ygeian
          </div>

          {/* Icons under links */}
          <div className="flex space-x-4 mt-2 md:mt-0 text-gray-400">
            <Link to="/facebook" className="hover:text-white"><FaFacebookF /></Link>
            <Link to="/youtube" className="hover:text-white"><FaYoutube /></Link>
            <Link to="/linkedin" className="hover:text-white"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
