import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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
    <div className="flex flex-col min-h-[93dvh] bg-white px-4 py-6">
      <div className="w-full max-w-sm mx-auto flex-col flex-grow justify-center">
        <h2 className="text-xl font-bold mb-4 text-[#0a1f44] text-center">
          Login to Ygeian FOCUS
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-3">
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2 text-sm rounded-full bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white font-medium hover:opacity-90 transition duration-200"
            >
              Login
            </button>

            {/* Forgot Password */}
            <div className="text-right text-sm mt-1">
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Divider */}
            <div className="flex items-center my-3">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-400 text-sm">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Social Login */}
            <div className="space-y-2">
              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-full bg-[#f2f4fa] text-sm hover:bg-gray-300">
                <FaGoogle className="text-blue-600" /> Google
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-full bg-[#f2f4fa] text-sm hover:bg-gray-300">
                <FaLinkedinIn className="text-blue-700" /> LinkedIn
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      {/* Footer at exact bottom */}
      <div className="mt-6 pt-4 border-t border-gray-300 text-center">
        <p className="text-sm text-gray-600">New to Ygeian FOCUS?</p>
        <Link
          to="/register"
          className="text-blue-600 hover:underline text-sm"
        >
          Register now
        </Link>
      </div>
    </div>
  );
};

export default signIn;
