import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import bgImage from "../../assets/bg-imgs/register.png";

const SignUpDesktop = () => {
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
  <div className=" md:flex w-full h-[636px] bg-white shadow-[0_5px_10px_rgba(0,0,0,0.1)]">
      {/* Left - Form */}
      <div className="w-1/2 h-full flex items-center justify-center px-10 py-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-[#0a1f44]">
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

              <p className="text-sm text-gray-500 text-center">
                or use your email
              </p>

              <div className="flex gap-3">
                <button className="w-1/2 flex items-center justify-center gap-2 px-3 py-2 border rounded-full bg-[#f2f4fa] text-sm">
                  <FaGoogle className="text-blue-600" /> Google
                </button>
                <button className="w-1/2 flex items-center justify-center gap-2 px-3 py-2 border rounded-full bg-[#f2f4fa] text-sm">
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
      </div>

      {/* Right - Image */}
      <div className="w-1/2 h-full relative">
        <img
          src={bgImage}
          alt="Register Visual"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 text-white text-xl font-medium italic max-w-xs drop-shadow-md">
          "The latest medical news—personalized for you."
        </div>
      </div>
    </div>
  );
};

export default SignUpDesktop;
