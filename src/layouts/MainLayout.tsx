/** @format */

import React from 'react';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
