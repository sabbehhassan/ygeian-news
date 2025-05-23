import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layout/main-layout';
import SignIn from '../../pages/sign-in'
import SignUp from '../../pages/sign-up'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'login',
        element: <SignIn />,
      },
      {
        path: 'register',
        element: <SignUp />,
      },
      // You can add more pages like register, dashboard etc
    ],
  },
]);

export default router;