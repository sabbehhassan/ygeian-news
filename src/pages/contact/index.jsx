import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted", values);
      resetForm();
    },
  });

  return (
    <div className="py-4 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-500 mb-8">We'd love to hear from you!</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Contact Info */}
  <div className="bg-gray-100 p-6 rounded-lg shadow-sm h-full flex flex-col ">
    <h5 className="text-lg font-semibold mb-4">General Inquiries</h5>
    <div>
      <p className="text-xs uppercase text-gray-500">Email Address:</p>
      <p className="font-semibold mb-4 text-gray-700">support@ygeianfocus.com</p>
      <p className="text-xs uppercase text-gray-500">Office Hours:</p>
      <p className="font-semibold text-gray-700">Monday to Friday 9 AM - 5PM (CET)</p>
    </div>
  </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-gray-100 p-6 rounded-lg shadow-sm h-fit">
            <h5 className="text-lg font-semibold mb-4">Get in Touch</h5>
            <form onSubmit={formik.handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 uppercase mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter your full name"
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.fullName}</div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 uppercase mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter your email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 uppercase mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Enter subject"
                />
                {formik.touched.subject && formik.errors.subject && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 uppercase mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none bg-white text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Enter your message"
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                )}
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#38C5F2] text-white font-medium px-6 py-2 rounded-full hover:bg-[#2eb3de] transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
