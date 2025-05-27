import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Password strength logic
const getPasswordStrength = (password) => {
  if (!password) return "";
  if (password.length < 6) return "Weak";
  if (password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)) return "Medium";
  if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/))
    return "Strong";
  return "Weak";
};

const strengthColor = {
  Weak: "text-red-500",
  Medium: "text-yellow-500",
  Strong: "text-green-500",
};

// Yup validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const ResetPassword = () => {
  const [strength, setStrength] = useState("");

  return (
    <div className="flex items-center min-h-[500px] justify-center bg-white">
      <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-[90%] max-w-md">
        <h2 className="text-2xl font-bold text-[#0a1f44] mb-4">
          Reset your password
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Enter a new password for your account.
        </p>

        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alert("Password reset successful!");
            console.log(values);
          }}
        >
          {({ values, handleChange }) => {
            const strengthLevel = getPasswordStrength(values.password);
            setStrength(strengthLevel);

            return (
              <Form className="space-y-4">
                {/* New Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Create a new password"
                    onChange={(e) => {
                      handleChange(e);
                      setStrength(getPasswordStrength(e.target.value));
                    }}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                  {values.password && (
                    <p className={`text-xs mt-1 ${strengthColor[strength]}`}>
                      Strength: {strength}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Re-enter your new password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-2 rounded-full bg-gradient-to-r from-[#094B80] to-[#132D5E] text-white font-medium hover:opacity-90 transition duration-200"
                >
                  Reset Password
                </button>
              </Form>
            );
          }}
        </Formik>

         {/* ✅ Login Link */}
        <div className="text-sm mt-4 text-center">
          Back to {" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
