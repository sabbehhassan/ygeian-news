import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/main-layout";
import SignInWrapper from "../../pages/sign-in/SignInWrapper";  // ✅ NEW
import SignUp from "../../pages/sign-up";
import Home from "../../pages/home";
import ForgetPassword from "../../pages/forget-password";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <SignInWrapper />, // ✅ Updated
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "forgot-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);

export default router;
