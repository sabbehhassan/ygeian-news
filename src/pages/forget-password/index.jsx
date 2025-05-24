import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ForgetPass = () => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Reset Email Sent To:", values.email);
    // send API call here
  };

  return (
    <div className="flex items-center min-h-[500px] justify-center  bg-white">
      <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-[90%] max-w-md">
        <h2 className="text-2xl font-bold text-[#0a1f44] mb-4 ">
          Reset Your Password
        </h2>
        <p className="text-sm text-gray-600 mb-6 ">
          Enter the email address associated with your account.
        </p>

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
                placeholder="Email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-full bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white font-medium hover:opacity-90 transition duration-200"
            >
              Send Reset Link
            </button>
          </Form>
        </Formik>

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

export default ForgetPass;
