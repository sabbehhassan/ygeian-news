import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();

  // Footer hide on login and register pages
  const hideFooter = ['/login', '/register', '/forgot-password'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content goes here */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
