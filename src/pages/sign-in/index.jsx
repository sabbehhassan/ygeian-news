import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import bgImage from '../../assets/bg-imgs/login.png';
import { FaGoogle, FaLinkedinIn } from 'react-icons/fa';

const signIn = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values) => {
    console.log('Login Data:', values);
  };

  return (
    <div className="flex w-full h-[calc(100vh-64px)] overflow-hidden bg-white">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 px-6 sm:px-10 py-10 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0a1f44]">Login to Ygeian FOCUS</h2>

          {/* Social Buttons */}
          <div className="flex gap-3 mb-4">
            <button className="flex items-center justify-center bg-[#f2f4fa] gap-2 px-3 py-2 border border-gray-300 rounded-full text-sm w-1/2 hover:bg-gray-300">
              <FaGoogle className="text-blue-600" /> Google
            </button>
            <button className="flex items-center justify-center bg-[#f2f4fa] gap-2 px-3 py-2 border border-gray-300 rounded-full text-sm w-1/2 hover:bg-gray-300">
              <FaLinkedinIn className="text-blue-700" /> LinkedIn
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-4 text-center">or with email</p>

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form className="space-y-4">
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Username or email"
                  className="w-[380px] px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-[380px] px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                <div className="text-right text-sm mt-1">
                  <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot your password?</Link>
                </div>
              </div>

              <button
                type="submit"
                className="w-[380px] py-2 text-sm rounded-full bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white  transition duration-200"
              >
                Login
              </button>
            </Form>
          </Formik>

          <div className="text-sm mt-6 text-center">
            New to Ygeian FOCUS? <Link to="/register" className="text-blue-600 hover:underline">Register now</Link>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src={bgImage}
          alt="Login Visual"
          className="w-full h-full object-cover object-center"
          style={{ marginTop: '-8px' }} // reduces visual top gap
        />
        <div className="absolute bottom-6 left-22 text-white text-base sm:text-xl md:text-xl font-medium italic max-w-xs drop-shadow-md">
          "Because every decision starts with the right information."
        </div>
      </div>
    </div>
  );
};

export default signIn;
