import React from 'react';
import GlobalStyles from '../GlobalStyles';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
