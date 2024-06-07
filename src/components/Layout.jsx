import React from 'react';
import { Outlet } from 'react-router-dom';
import NavComponent from './NavComponent';
import Footer from './Footer';

const Layout = () => {
  return (
    <div id="root" className="d-flex flex-column min-vh-100">
    <NavComponent />
    <main className="flex-grow-1">
      <Outlet />
    </main>
    <Footer />
  </div>
  );
};

export default Layout;
