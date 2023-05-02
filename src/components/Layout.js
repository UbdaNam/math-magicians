import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

function Layout() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
