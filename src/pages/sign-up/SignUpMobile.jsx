import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";

const SignUpMobile = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Signup Data:", values);
  };

  return (
    <div className="flex flex-col justify-between items-center min-h-[93dvh] px-4 py-6">
      {/* Content */}
      <div className="w-full max-w-sm flex-grow">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#0a1f44]">
          Join Ygeian FOCUS
        </h2>

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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-full bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white font-medium"
            >
              Continue
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-400 text-sm">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border rounded-full bg-[#f2f4fa] text-sm">
                <FaGoogle className="text-blue-600" /> Google
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border rounded-full bg-[#f2f4fa] text-sm">
                <FaLinkedinIn className="text-blue-700" /> LinkedIn
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      {/* Footer-style bottom link */}
      <div className="mt-6 pt-4 border-t border-gray-300 text-center text-sm w-full max-w-sm">
        <p className="text-sm text-gray-600">Already have an account?</p>
        <Link to="/login" className="text-blue-600 hover:underline text-sm">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpMobile;
