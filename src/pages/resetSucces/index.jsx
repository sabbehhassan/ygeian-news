import React from "react";

const ResendLink = () => {
  return (
    <div className="flex items-center min-h-[500px] justify-center bg-white">
      <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-[90%] max-w-md">
        <h2 className="text-2xl font-bold text-[#0a1f44] mb-4">
          Password reset success
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Your password has been updated. You can now log in with your new password.
        </p>

        <button
          type="submit"
          className="w-full py-2 rounded-full bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white font-medium hover:opacity-90 transition duration-200"
        >
          Login
        </button>

        {/* ✅ Login Link */}
        <div className="text-sm mt-4 text-center">
          Back to {" "}
          <a href="/" className="text-blue-600 hover:underline">
            Homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResendLink;
