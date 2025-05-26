import React from "react";
import yExist from '../../assets/bg-imgs/yexist.png'

function YExist() {
  return (
    <div className="w-full py-12 px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Exist</h2>
          <p className="text-gray-600 text-lg leading-snug">
            At Ygeian Focus, we simplify how medical professionals consume news.
            By aggregating the latest articles and personalizing them to your
            specialty, we save you time and keep you informed.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-7/12 flex justify-center md:justify-end md:pr-12">
          <img
            src={yExist}
            alt="Doctors talking"
            className="w-full max-w-md rounded-[5%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default YExist;
