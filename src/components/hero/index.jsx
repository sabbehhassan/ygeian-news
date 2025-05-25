import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 text-center bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0a1f44] mb-4">
          Stay Ahead in Medicine with Personalized News
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Get daily updates from your field of expertise, summarized and
          tailored for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center sm:gap-6 space-y-4 sm:space-y-0">
          <button
            onClick={() => navigate("/register")}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white rounded-full hover:opacity-90 transition duration-300"
          >
            Sign Up For Free
          </button>
          <button
            onClick={() => navigate("/learn-more")}
            className="w-full sm:w-auto px-6 py-3 border border-[#43B3E5] text-[#43B3E5] rounded-full hover:bg-[#e6efff] transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
