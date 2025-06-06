import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/main-layout";
import SignInWrapper from "../../pages/sign-in/SignInWrapper";  
import SignUpWrapper from "../../pages/sign-up/SignUpWrapper"; 
import Home from "../../pages/home";
import ForgetPassword from "../../pages/forget-password";
import LearnMore from "../../pages/learn"
import Contact from "../../pages/contact"
import FAQ from "../../pages/FAQ"
import ArticalPage from "../../pages/ArticlePage"
import ArticlePage from "../../pages/ArticlePage";

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
      
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "article",
        element: <ArticlePage />,
      },

    ],
  },
]);

export default router;
