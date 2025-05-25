import React from "react";
import { Link } from "react-router-dom";
import mobileImage from "../../assets/bg-imgs/drm.png"; // your mobile image path
import desktopImage from "../../assets/bg-imgs/drdesktop.png"; // your desktop image path

function Learn({
  heading = "Redefining Medical News for a Smarter Tomorrow",
  subheading = "Discover a personalized way to stay informed, powered by AI and tailored to your expertise.",
  buttonText = "Get Started Today",
  buttonLink = "/signup",
  textColor = "white",
}) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 z-0">
        <img
          src={desktopImage}
          alt="Desktop Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Mobile Background */}
      <div className="block md:hidden absolute inset-0 z-0">
        <img
          src={mobileImage}
          alt="Mobile Background"
          className="w-screen h-screen object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 pt-20   md:flex items-center h-full px-14 md:px-24 ">
        <div className="max-w-2xl  text-center  md:text-left ">
          <h1 className={`text-4xl sm:text-3xl  md:text-5xl font-bold mb-4 text-${textColor}`}>
            {heading}
          </h1>
          <p className={`text-2xl sm:text-lg md:text-xl mb-6 text-${textColor}`}>
            {subheading}
          </p>
          <Link
            to={buttonLink}
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-full text-xl sm:text-base font-medium hover:bg-cyan-700 transition"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Learn;
