import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import bgImage from "../../assets/bg-imgs/register.png";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Signup Data:", values);
    // Handle sign-up logic here
  };

  return (
    <div className="flex w-full h-[calc(100vh-64px)] overflow-hidden bg-white">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 px-6 sm:px-10 py-10 flex flex-col justify-center items-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0a1f44]">
          Join Ygeian FOCUS
        </h2>

        {/* Formik Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-[380px] px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-[380px] px-4 py-2 border border-gray-300 rounded focus:outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-[380px] px-4 py-2 border border-gray-300 rounded focus:outline-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-[380px] py-2 rounded-full bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white hover:bg-[#0a1a36] transition duration-200"
            >
              Continue
            </button>
            {/* Social Buttons */}
            <p className="text-sm text-gray-500 mb-4 text-center">
              or use your email
            </p>
            {/* Social Buttons */}
            <div className="flex gap-3 mb-4">
              <button className="flex items-center justify-center bg-[#f2f4fa] gap-2 px-3 py-2 border border-gray-300 rounded-full text-sm w-1/2 hover:bg-gray-300">
                <FaGoogle className="text-blue-600" /> Google
              </button>
              <button className="flex items-center justify-center bg-[#f2f4fa] gap-2 px-3 py-2 border border-gray-300 rounded-full text-sm w-1/2 hover:bg-gray-300">
                <FaLinkedinIn className="text-blue-700" /> LinkedIn
              </button>
            </div>
          </Form>
        </Formik>

        <div className="text-sm mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block w-1/2 relative">
        <img
          src={bgImage}
          alt="Signup Visual"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-22 text-white text-base sm:text-xl md:text-xl font-medium italic max-w-xs drop-shadow-md">
          "The latest medical news—personalized for you."
        </div>
      </div>
    </div>
  );
};

export default SignUp;
