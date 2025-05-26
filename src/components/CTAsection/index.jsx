import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className=" py-14 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#0a1f44] mb-4 ">
          Want personalized updates <br /> for your specialty?
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Sign Up to customize your feed.
        </p>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => navigate("/register")}
            className=" block w-full px-6 py-3 bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white rounded-full hover:bg-[#071733] transition duration-300"
          >
            Sign Up For Free
          </button>
          </div>
          </div>
          </section>
  );
};

export default CTA;
