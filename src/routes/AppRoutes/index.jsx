import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/main-layout";
import SignInWrapper from "../../pages/sign-in/SignInWrapper";  
import SignUpWrapper from "../../pages/sign-up/SignUpWrapper"; 
import Home from "../../pages/home";
import ForgetPassword from "../../pages/forget-password";
import LearnMore from "../../pages/learn"

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
        element: <SignInWrapper />, 
      },
      {
        path: "register",
        element: <SignUpWrapper />,
      },
      {
        path: "forgot-password",
        element: <ForgetPassword />,
      },
      {
        path: "learn-more",
        element: <LearnMore />,
      },
    ],
  },
]);

export default router;
