import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import bgImage from "../../assets/bg-imgs/login.png";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";

const signIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Login Data:", values);
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen overflow-hidden bg-white shadow-[0_5px_10px_rgba(0,0,0,0.1)]">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 px-4 sm:px-10 py-10 flex flex-col justify-between min-h-screen">
        <div className="w-full max-w-sm sm:max-w-md mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0a1f44] text-center sm:text-left">
            Login to Ygeian FOCUS
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-4">
              {/* Email */}
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Username or email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 text-sm rounded-full bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white font-medium hover:opacity-90 transition duration-200"
              >
                Login
              </button>

              {/* Forgot Password - Mobile Only */}
              <div className="block md:hidden text-right text-sm mt-1">
                <Link
                  to="/forget-password"
                  className="text-blue-600 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Divider with 'or' - Mobile Only */}
              <div className="flex md:hidden items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-400 text-sm">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Social Buttons - Mobile Only */}
              <div className="block md:hidden space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-full bg-[#f2f4fa] text-sm hover:bg-gray-300">
                  <FaGoogle className="text-blue-600" /> Google
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-full bg-[#f2f4fa] text-sm hover:bg-gray-300">
                  <FaLinkedinIn className="text-blue-700" /> LinkedIn
                </button>
              </div>
            </Form>
          </Formik>
          {/* Mobile Footer */}
          <div className="block md:hidden mt-20 pt-6 border-t border-gray-300 text-center">
            <p className="text-sm text-gray-600">New to Ygeian FOCUS?</p>
            <Link
              to="/register"
              className="text-blue-600 hover:underline text-sm"
            >
              Register now
            </Link>
          </div>

          {/* Desktop View: Social + Register */}
          <div className="hidden md:block mt-6">
            <div className="flex gap-3 mb-4">
              <button className="flex items-center justify-center bg-[#f2f4fa] gap-2 px-3 py-2 border border-gray-300 rounded-full text-sm w-1/2 hover:bg-gray-300">
                <FaGoogle className="text-blue-600" /> Google
              </button>
              <button className="flex items-center justify-center bg-[#f2f4fa] gap-2 px-3 py-2 border border-gray-300 rounded-full text-sm w-1/2 hover:bg-gray-300">
                <FaLinkedinIn className="text-blue-700" /> LinkedIn
              </button>
            </div>

            <p className="text-sm text-gray-500 my-4 text-center">
              or with email
            </p>

            <div className="text-sm text-center">
              New to Ygeian FOCUS?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src={bgImage}
          alt="Login Visual"
          className="w-full h-full object-cover"
          style={{ marginTop: "-8px" }}
        />
        <div className="absolute bottom-6 left-6 text-white text-base sm:text-xl font-medium italic max-w-xs drop-shadow-md">
          "Because every decision starts with the right information."
        </div>
      </div>
    </div>
  );
};

export default signIn;
