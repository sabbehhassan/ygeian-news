import React from "react";

const ResendLink = () => {
  return (
    <div className="flex items-center min-h-[500px] justify-center bg-white">
      <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-[90%] max-w-md">
        <h2 className="text-2xl font-bold text-[#0a1f44] mb-4">
          Check your inbox
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          We’ve sent a password reset link to your email. Follow the instructions in the email to reset your password.
        </p>

        {/* ❗ Message Here */}
        <div className="text-sm text-gray-700 mb-4 text-center">
          Didn’t receive an email?
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-full bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white font-medium hover:opacity-90 transition duration-200"
        >
          Resend Link
        </button>

        {/* ✅ Login Link */}
        <div className="text-sm mt-4 text-center">
          Remember your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResendLink;
