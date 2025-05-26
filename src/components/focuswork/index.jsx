import React from "react";
import {
  UserIcon,
  NewspaperIcon,
  SparklesIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import FocusImage from "../../assets/bg-imgs/focuswork.png";

const FocusWork = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left: Image */}
        <div className="order-1 md:order-none text-center md:text-right">
          <img
            src={FocusImage}
            alt="Focus Work"
            className="max-h-[460px] w-full object-contain inline-block"
          />
        </div>

        {/* Middle: Vertical Line with Dots (only show on md and up) */}
        <div className="hidden md:flex justify-center">
          <div className="relative h-[480px] w-[2px] bg-sky-400 mx-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 -translate-x-1/2 rounded-full w-[14px] h-[14px] bg-sky-400 shadow-md"
                style={{
                  top: `${(i + 0.5) * 22}%`,
                  boxShadow: "0 0 10px #5BC0F8",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: Steps */}
        <div className="flex flex-col justify-center ">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center md:text-left">
            How Ygeian Focus Works
          </h3>
          <ul className="space-y-8 text-sm md:text-lg text-gray-700">
            <li className="flex flex-col md:items-start md:text-start  md:flex-col">
              <UserIcon className="text-sky-500 mb-2 h-6 w-6" />
              <span>Sign up and select your specialty.</span>
            </li>
            <li className="flex flex-col  md:flex-col">
              <NewspaperIcon className="text-sky-500 mb-2 h-6 w-6" />
              <span>Discover a personalized feed of medical news.</span>
            </li>
            <li className="flex flex-col md:items-start md:text-start md:flex-col">
              <SparklesIcon className="text-sky-500 mb-2 h-6 w-6" />
              <span>Use AI to summarize and save articles.</span>
            </li>
            <li className="flex flex-col md:items-start md:text-start md:flex-col">
              <BellIcon className="text-sky-500 mb-2 h-6 w-6" />
              <span>Stay informed and share insights with ease.</span>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="mt-8 text-center md:text-left">
            <Link
              to="/signup"
              className=" md:inline-block md:w-auto bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white py-3 px-8 rounded-full text-sm md:text-base font-semibold hover:opacity-90"
            >
              Start Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusWork;
