import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import bgImage from "../../assets/bg-imgs/login.png";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";

const SignInDesktop = () => {
  const initialValues = { email: "", password: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Desktop Login:", values);
  };

  return (
    <div className=" md:flex w-full h-[668px] bg-white shadow-[0_5px_10px_rgba(0,0,0,0.1)]">
      {/* Form Section */}
      <div className="w-1/2 px-10 py-10 flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#0a1f44]">
            Login to Ygeian FOCUS
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-4">
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

              <button
                type="submit"
                className="w-full py-2 text-sm rounded-full bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white font-medium hover:opacity-90 transition duration-200"
              >
                Login
              </button>
            </Form>
          </Formik>

          <div className="flex gap-3 my-6">
            <button className="flex items-center justify-center bg-[#f2f4fa] gap-2 px-3 py-2 border border-gray-300 rounded-full text-sm w-1/2 hover:bg-gray-300">
              <FaGoogle className="text-blue-600" /> Google
            </button>
            <button className="flex items-center justify-center bg-[#f2f4fa] gap-2 px-3 py-2 border border-gray-300 rounded-full text-sm w-1/2 hover:bg-gray-300">
              <FaLinkedinIn className="text-blue-700" /> LinkedIn
            </button>
          </div>

          <p className="text-sm text-gray-500 my-4 text-center">or with email</p>

          <div className="text-sm text-center">
            New to Ygeian FOCUS?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register now
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-1/2 relative">
        <img
          src={bgImage}
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 text-white text-xl font-medium italic max-w-xs drop-shadow-md">
          "Because every decision starts with the right information."
        </div>
      </div>
    </div>
  );
};

export default SignInDesktop;
